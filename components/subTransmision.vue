<template>
  <div class="wrapper" ref="stripes" v-scroll-lock="showLoader">
    <div class="stripe"></div>
    <div class="stripe"></div>
    <div class="stripe"></div>
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
    tl.to(elements, {
      xPercent: 100,
      stagger: 0.4,
      duration: 1,
      ease: 'power1.in',
    }).to(this.$refs.stripes, {
      display: 'none',
      onComplete: () => (this.showLoader = false),
    });
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
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
    font-size: 22px;
  }
  h2 {
    font-size: 72px;
  }
}
@media (min-width: 1024px) {
  .logo {
    color: white;
    h1 {
      font-size: 62px;
    }
    h2 {
      font-size: 142px;
    }
  }
}
</style>
