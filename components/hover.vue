<template>
  <div ref="cursor" class="circle">
    <p class="text">Przeciągnij</p>
  </div>
</template>

<script>
export default {
  props: {
    isMouseOn: {
      type: Object,
      default: {
        state: false,
        posX: 0,
        posY: 0,
      },
    },
  },
  methods: {
    handleMouseMove(x, y) {
      let cursor = this.$refs.cursor
      cursor.style.cssText = `left: ${x}px; top: ${y}px`
    },
  },
  watch: {
    isMouseOn: {
      handler(val) {
        this.handleMouseMove(val.posX, val.posY)
      },
      deep: true,
    },
  },
}
</script>

<style scoped lang="scss">
.circle {
  display: none;
  position: fixed;
  top: 0;
  left: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  transition: 0.08s;
  pointer-events: none;
  .text {
    color: rgb(206, 206, 206);
    font-size: 12px;
  }
}
@media (min-width: 1440px) {
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #393c46;
  }
  .text {
    color: rgb(63, 63, 63);
    &:after {
      content: ' >';
    }
    &:before {
      content: '< ';
    }
  }
}
</style>
