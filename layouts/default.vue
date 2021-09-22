<template>
  <div>
    <loader />
    <left-bar />
    <navigation />
    <div ref="mainContainer">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    smothScroll(target, viewport, smoothness) {
      target = this.$gsap.utils.toArray(target)[0]
      smoothness = smoothness || 1
      this.$gsap.set(viewport || target.parentNode, {
        overflow: 'hidden',
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      })
      this.$gsap.set(target, { overflow: 'visible', width: '100%' })

      let getProp = this.$gsap.getProperty(target),
        setProp = this.$gsap.quickSetter(target, 'y', 'px'),
        setScroll = this.$ScrollTrigger.getScrollFunc(window),
        removeScroll = () => (target.style.overflow = 'visible'),
        killScrub = (trigger) => {
          let scrub = trigger.getTween
            ? trigger.getTween()
            : this.$gsap.getTweensOf(trigger.animation)[0] // getTween() was added in 3.6.2
          scrub && scrub.kill()
          trigger.animation.progress(trigger.progress)
        },
        height,
        isProxyScrolling

      function onResize() {
        height = target.clientHeight
        target.style.overflow = 'visible'
        document.body.style.height = height + 'px'
      }
      onResize()
      this.$ScrollTrigger.addEventListener('refreshInit', onResize)
      this.$ScrollTrigger.addEventListener('refresh', () => {
        removeScroll()
        requestAnimationFrame(removeScroll)
      })
      this.$ScrollTrigger.defaults({ scroller: target })
      this.$ScrollTrigger.prototype.update = (p) => p // works around an issue in this.$ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

      this.$ScrollTrigger.scrollerProxy(target, {
        scrollTop(value) {
          if (arguments.length) {
            isProxyScrolling = true // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the target tween/this.$ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the this.$ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
            setProp(-value)
            setScroll(value)
            return
          }
          return -getProp('y')
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
      })

      return this.$ScrollTrigger.create({
        animation: this.$gsap.fromTo(
          target,
          { y: 0 },
          {
            y: () => document.documentElement.clientHeight - height,
            ease: 'none',
            onUpdate: this.$ScrollTrigger.update,
          }
        ),
        scroller: window,
        invalidateOnRefresh: true,
        start: 0,
        end: () => height - document.documentElement.clientHeight,
        scrub: smoothness,
        onUpdate: (self) => {
          if (isProxyScrolling) {
            killScrub(self)
            isProxyScrolling = false
          }
        },
        onRefresh: killScrub, // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
      })
    },
  },
  mounted() {
    this.smothScroll(this.$refs.mainContainer)
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  background: #21252a;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #18191d;
}
::-webkit-scrollbar-thumb {
  background: #21252a;
}
</style>
