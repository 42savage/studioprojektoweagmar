<template>
  <div ref="loader" class="wrapper" v-scroll-lock="showLoader">
    <h1>Studio projektowe</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoader: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      const tl = this.$gsap.timeline()
      const target = this.$refs.loader
      tl.fromTo(
        target,
        {
          yPercent: 0,
          duration: 1,
        },
        {
          yPercent: 100,
        }
      )
    })
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #2c2e36;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  h1 {
    color: white;
    font-size: 140px;
  }
}
</style>
