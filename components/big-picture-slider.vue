<template>
  <div class="wrapper f-col">
    <div class="slider flex f-row">
      <div class="left-content">
        <div class="content">
          <p class="title">AGMAR</p>
          <p class="subtitle">Projektujemy wnętrza</p>
          <p class="bolder">Klasyczne i nowoczesne</p>
          <p class="text">
            Jesteśmy nowopowstałym studiem projektowym, które postawiło sobie za
            cel tworzenie zarówno nowoczesnych jak i klasycznych wizualiacji
            przyjmenych dla oka.
          </p>
          <button class="checkBtn flex f-row f-center">
            <div class="arrow flex f-center">
              <icons-arrow-right />
            </div>
            Sprawdź nasze realizacje
          </button>
        </div>
      </div>
      <div class="right-content">
        <div class="single-image">
          <img src="r1.jpg" alt="Image" />
        </div>
        <div class="custom-slider f-row f-center" ref="slider">
          <div
            v-for="slides in slides[this.currentSet].setOfImages"
            :key="slides.id"
            class="single-slide"
          >
            <div class="stripe"></div>
            <img
              :src="require(`/assets/custom-slider/${slides.src}.jpg`)"
              alt="Zdjęcie podzielone na 4 części, przedstawia kuchnie"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="navigation flex f-row">
      <div class="counter flex f-center f-row">
        <p ref="count" class="count">0{{ currentSet + 1 }}</p>
        <div ref="line" class="line"></div>
        <p ref="countertitle" class="name">{{ slides[currentSet].title }}</p>
      </div>
      <div class="arrows flex f-center f-row">
        <button @click="playAnim('prev')">
          <icons-arrow v-if="this.currentSet === 0" :fill="'#2c2c2c'" />
          <icons-arrow v-else :fill="'#565656'" />
        </button>
        <button @click="playAnim('next')">
          <icons-arrow v-if="this.currentSet === 1" :fill="'#2c2c2c'" />
          <icons-arrow v-else :fill="'#565656'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoPlayState: true,
      currentSet: 0,
      slides: [
        {
          id: 0,
          setOfImages: [
            {
              id: 0,
              src: 'fit1',
            },
            {
              id: 1,
              src: 'fit2',
            },
            {
              id: 2,
              src: 'fit3',
            },
            {
              id: 3,
              src: 'fit4',
            },
          ],
          title: 'Apartament "Bekas"',
        },
        {
          id: 0,
          setOfImages: [
            {
              id: 0,
              src: 'fat1',
            },
            {
              id: 1,
              src: 'fat2',
            },
            {
              id: 2,
              src: 'fat3',
            },
            {
              id: 3,
              src: 'fat4',
            },
          ],
          title: 'Apartament "Borubar"',
        },
      ],
    };
  },
  methods: {
    initSlider() {
      this.tl = this.$gsap.timeline();
    },
    autoPlay() {
      if (this.autoPlayState) {
        this.tl.play();
      } else {
        this.tl.pause();
      }
    },
    changeSet(direction) {
      console.log(direction);
      if (this.currentSet < this.slides.length - 1 && direction === 'next') {
        this.currentSet += 1;
      } else if (this.currentSet > 0 && direction === 'prev') {
        this.currentSet -= 1;
      }
    },
    playAnim(direction) {
      if (direction === 'next' && this.currentSet < this.slides.length - 1) {
        this.tl.fromTo(
          '.stripe',
          {
            display: 'none',
            yPercent: -100,
          },
          {
            opacity: 1,
            display: 'block',
            yPercent: 100,
            duration: 2,
            stagger: 0.05,
            onStart: () => {
              setTimeout(() => {
                this.changeSet(direction);
              }, 630);
            },
            onComplete: () => {
              this.tl.kill;
            },
          }
        );
      } else if (direction === 'prev') {
        this.tl.fromTo(
          '.stripe',
          {
            display: 'none',
            yPercent: 100,
          },
          {
            opacity: 1,
            display: 'block',
            yPercent: -100,
            duration: 2,
            stagger: -0.05,
            onStart: () => {
              setTimeout(() => {
                this.changeSet(direction);
              }, 650);
            },
            onComplete: () => {
              this.tl.kill;
            },
          }
        );
      }
    },
  },
  watch: {
    currentSet: function (s) {
      this.$gsap.fromTo(
        [this.$refs.countertitle, this.$refs.count],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
        }
      );
      this.$gsap.fromTo(
        this.$refs.line,
        {
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      );
    },
  },
  mounted() {
    this.initSlider();
  },
};
</script>

<style lang="scss" scoped>
.stripe {
  width: 100%;
  height: 100%;
  background: #282d33;
  position: absolute !important;
  top: 0;
  left: 0;
  display: none;
}
.slider {
  width: 100%;
}
.wrapper {
  display: none;
  width: 100%;
  height: 100vh;
  padding: 162px 120px 0;
}
.title {
  font-size: 92px;
  color: #282c31;
  font-weight: bold;
}
.subtitle {
  font-size: 28px;
  color: white;
  font-weight: lighter;
  margin-top: -50px;
}
.bolder {
  font-size: 22px;
  font-weight: bold;
  color: #debe95;
}
.text {
  font-weight: 300;
  color: #b2b2b2;
  font-size: 18px;
  margin-top: 24px;
}
.checkBtn {
  background: none;
  border: none;
  color: #debe95;
  font-size: 18px;
  font-weight: bold;
  margin-top: 36px;
  cursor: pointer;
}
.arrow {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: relative;
  margin-right: 18px;
  &::after {
    content: '';
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50%;
    position: absolute;
  }
}
.content {
  max-width: 400px;
}
.count,
.name {
  color: #565656;
}
.count {
  font-size: 24px;
}
.name {
  font-size: 14px;
}
.line {
  background: #565656;
  width: 72px;
  height: 2px;
  margin: 0 12px;
}
.navigation {
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 36px;
  margin-top: 18px;
}
.arrows {
  button {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0 18px;
    &:nth-child(2) {
      transform: rotate(180deg);
      margin-bottom: 4px;
    }
  }
}
.left-content,
.right-content {
  width: 50%;
}
.right-content {
  position: relative;
  img {
    z-index: -1;
    width: 600px;
    position: absolute;
    right: 0;
  }
}
.custom-slider {
  display: none;
  .single-slide {
    overflow: hidden;
    position: relative;
    width: 160px;
    margin: 0 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
  }
  .title {
    color: rgba(71, 71, 71, 0.815);
  }
}
@media (min-width: 1440px) {
  .single-image {
    display: none;
  }
  .custom-slider {
    display: flex;
  }
  .right-content {
    position: initial;
    img {
      position: initial;
    }
  }
}
</style>
