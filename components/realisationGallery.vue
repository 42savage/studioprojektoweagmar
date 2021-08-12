<template>
  <div>
    <div class="wrapper">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="singleRealisation"
      >
        <img :src="require(`@/assets/${image.src}`)" :alt="image.alt" />
      </div>
    </div>
    <div class="nav">
      <button class="navItem">
        <icons-smallArrow />
      </button>
      <button class="navItem">
        <icons-smallArrow />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          alt: 'Na fotografii widoczna jest łazienka w modernistycznym stylu',
          src: 'r1.jpg',
        },
        {
          alt: 'Na fotografii widoczny jest salon w ciemnej zabudowie',
          src: 'r2.jpg',
        },
        {
          alt: 'Na fotografii widoczna jest kuchnia w nowoczesnym zabudowaniu',
          src: 'r3.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
}
.singleRealisation {
  width: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    padding: 36px;
  }
}
.navItem {
  background: none;
  border: none;
  &:nth-child(2) svg {
    transform: rotate(180deg);
    margin: 0 24px;
  }
}
.nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 36px;
}
</style>
