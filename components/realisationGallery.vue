<template>
  <div>
    <div
      class="wrapper"
      @mouseenter="mouse.state = true"
      @mouseleave=";(mouse.state = false), (mouse.posX = 0), (mouse.posY = 0)"
      @mousemove="passPosition"
    >
      <hover v-if="mouse.state" :isMouseOn="mouse" />
      <client-only>
        <carousel
          id="gallery"
          :perPage="2"
          :loop="true"
          :paginationEnabled="false"
          :navigationEnabled="false"
        >
          <slide
            v-for="(image, index) in images"
            :key="index"
            class="singleRealisation"
          >
            <img :src="require(`@/assets/${image.src}`)" :alt="image.alt" />
          </slide>
        </carousel>
      </client-only>
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
      mouse: {
        state: false,
        posX: 0,
        posY: 0,
      },
    }
  },
  methods: {
    passPosition(e) {
      this.mouse.posX = e.clientX
      this.mouse.posY = e.clientY
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  backface-visibility: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  cursor: none;
}
.singleRealisation {
  width: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    padding: 12px;
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
#gallery {
  margin-left: 120px;
  margin-right: 120px;
}
@media (min-width: 1024px) {
  .nav {
    display: none;
  }
}
</style>
