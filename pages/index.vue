<template>
  <div ref="container" class="container">
    <carousel-slider />
    <big-picture-slider />
    <section id="offer" class="offer">
      <entryTitle
        id="offer-title"
        :title="'Oferta'"
        :subtitle="'Nasza oferta'"
      />
      <div class="offerList">
        <offerBox
          v-for="offer in offerList"
          :key="offer.id"
          :route="offer.name"
          :title="offer.title"
          :content="offer.content"
          :list="offer.list"
          :text="offer.text"
        />
      </div>
    </section>
    <section class="realisations" id="realisations">
      <entryTitle
        :title="'Realizacje'"
        :subtitle="'Nasze realizacje'"
        :titleSize="62"
        :bottomMargin="42"
      />
      <p class="entryText">
        Do każdej realizacji podchodzimy indywidualnie. Nasze projekty to nie
        tylko sucha wizualizacja ale także propozycje układów funkcyjnych czy
        układy szuflad w szafach.
      </p>
      <realisationGallery />
    </section>
    <section id="contact" class="contact">
      <entryTitle
        :title="'Kontakt'"
        :subtitle="'Skontaktuj się z nami'"
        :titleSize="78"
        :subtitleSize="30"
        :bottomMargin="0"
      />
      <contactForm />
    </section>
    <footer>
      <p class="author">Copryright <span>Strony internetowe Radom</span></p>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import bigPictureSlider from '~/components/big-picture-slider.vue';
export default {
  components: { bigPictureSlider },
  data() {
    return {
      currSlide: 1,
    };
  },
  computed: {
    ...mapGetters({
      offerList: 'offer/offerList',
      slides: 'slider/slides',
    }),
  },
  methods: {
    prevSlide() {
      this.tl.reverse();
    },
    nextSlide() {
      this.tl.play();
    },
  },
  transition: {
    enter(e) {
      this.$gsap.from(e, {
        y: -100,
        opacity: 0,
        duration: 0.6,
      });
    },
  },
};
</script>
<style scoped lang="scss">
.inner {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100vh;
  position: relative;
  z-index: -1;
  div {
    flex-shrink: 0;
    width: 100%;
  }
}
.slider-navigation {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 36px;
  p {
    color: #cecece;
    font-size: 18px;
    font-weight: 300;
  }
}
.controls {
  button {
    margin: 0 6px;
    background: none;
    border: none;
  }
  button:nth-child(2) svg {
    transform: rotate(180deg);
  }
}
.entryText {
  color: white;
  padding: 36px;
}
.author {
  font-size: 16px;
  color: white;
  text-align: center;
  width: 100%;
  margin: 30px 0;
  span {
    color: #00d1ff;
  }
}
@media (min-width: 1024px) {
  .offerList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 120px;
  }
  .entryText {
    margin: 0 120px 60px;
    width: 600px;
    padding: 0;
  }
}
</style>
