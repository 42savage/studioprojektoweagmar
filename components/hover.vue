<template>
  <div ref="cursor" class="circle">
    <p class="text">Przeciągnij</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correction: 950,
    };
  },
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
      let cursor = this.$refs.cursor;
      this.$gsap.to(cursor, {
        x: x - this.correction,
        y: y,
      });
      if (this.isMouseOn.state === false) {
        this.$gsap.to(cursor, {
          opacity: 0,
        });
      } else {
        this.$gsap.to(cursor, {
          opacity: 1,
        });
      }
      // cursor.style.cssText = `left: ${x}px; top: ${y}px`
    },
  },
  watch: {
    isMouseOn: {
      handler(val) {
        this.handleMouseMove(val.posX, val.posY);
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.circle {
  display: none;
  opacity: 0;
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
    background: #111422;
  }
  .text {
    color: rgb(12, 8, 8);
    &:after {
      content: ' >';
    }
    &:before {
      content: '< ';
    }
  }
}
</style>
