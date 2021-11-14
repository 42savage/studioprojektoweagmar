<template>
  <div
    class="wrapper"
    @mousemove="moveCircle"
    @mouseleave="hideCircle"
    @mouseenter="showCircle"
  >
    <div ref="circle" class="circle">
      <p>Przeciągnij</p>
    </div>
    <client-only>
      <Flicking
        :hideBeforeInit="true"
        :options="{ align: 'center', circular: true }"
      >
        <div
          v-for="image in images"
          class="singleRealisation"
          :key="image.id"
          :style="{ backgroundImage: `url(${image.src})` }"
        ></div>
      </Flicking>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 0,
          alt: 'Na fotografii widoczna jest łazienka w modernistycznym stylu',
          src: 'r1.jpg',
        },
        {
          id: 1,
          alt: 'Na fotografii widoczny jest salon w ciemnej zabudowie',
          src: 'r2.jpg',
        },
        {
          id: 2,
          alt: 'Na fotografii widoczna jest kuchnia w nowoczesnym zabudowaniu',
          src: 'r3.jpg',
        },
      ],
    };
  },
  methods: {
    showCircle() {
      this.$gsap.to(this.$refs.circle, {
        opacity: 1,
      });
    },
    hideCircle() {
      this.$gsap.to(this.$refs.circle, {
        opacity: 0,
      });
    },
    moveCircle(e) {
      this.$gsap.to(this.$refs.circle, {
        x: e.clientX - 150,
        y: e.clientY - 200,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.circle {
  display: none;
}
.flicking-viewport {
  padding: 0 36px;
}
.singleRealisation {
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
  margin: 0 12px;
}
.wrapper {
  position: relative;
  cursor: none;
}
@media (min-width: 768px) {
  .wrapper {
    padding: 0 36px;
    overflow: hidden;
  }
  .flicking-viewport {
    padding: initial;
  }
  .singleRealisation {
    width: 50%;
    overflow: hidden;
  }
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 0 120px;
    overflow: initial;
  }
  .singleRealisation {
    width: 600px;
    height: 400px;
  }
  .circle {
    display: flex;
    background: rgb(12, 17, 34);
    color: white;
    position: absolute;
    top: 0;
    opacity: 0;
    left: 150px;
    border-radius: 50%;
    width: 140px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 99;
  }
}
</style>
