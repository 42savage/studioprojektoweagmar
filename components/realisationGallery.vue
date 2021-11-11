<template>
  <div class="wrapper">
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
};
</script>

<style lang="scss" scoped>
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
  }
  .singleRealisation {
    width: 600px;
    height: 400px;
  }
}
</style>
