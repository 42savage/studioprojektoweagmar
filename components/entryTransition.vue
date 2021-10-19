<template>
  <div class="container" ref="container" v-scroll-lock="showLoader">
    <div ref="logo" class="logo">
      <h1>Studio projektowe</h1>
      <h2>AGMAR</h2>
    </div>
    <div class="wrapper" ref="stripes">
      <div class="stripe"></div>
      <div class="stripe"></div>
      <div class="stripe"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    const tl = this.$gsap.timeline();
    const elements = this.$gsap.utils.toArray(this.$refs.stripes.children);
    tl.to(this.$refs.logo, {
      opacity: 0,
      duration: 3,
    })
      .to(elements, {
        xPercent: 100,
        stagger: 0.4,
        duration: 2,
        ease: 'power1.in',
      })
      .to(this.$refs.container, {
        display: 'none',
        onComplete: () => (this.showLoader = false),
      });
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
}
.wrapper {
  width: 100%;
  height: 100%;
}
.stripe {
  width: 100%;
  height: 33%;
  background: #24282d;
}
.logo {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.logo {
  color: white;
  h1 {
    font-size: 62px;
  }
  h2 {
    font-size: 142px;
  }
}
</style>
