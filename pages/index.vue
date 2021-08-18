<template>
  <div class="container">
    <header class="slider">
      <div class="inner">
        <div v-for="slide in slides" :key="slide.id">
          <slide
            :image="slide.image"
            :title="slide.title"
            :subTitle="slide.subTitle"
            :text="slide.text"
            :route="slide.route"
          />
        </div>
      </div>
      <div class="slider-navigation">
        <div class="counter">
          <p>0{{ currSlide + 1 }} / 0{{ slides.length }}</p>
        </div>
        <div class="controls"><icons-arrow /><icons-arrow /></div>
      </div>
    </header>
    <section id="offer" class="offer">
      <entryTitle :title="'Oferta'" :subtitle="'Nasza oferta'" />
      <div v-for="offer in offerList" :key="offer.id">
        <offerBox
          :route="offer.name"
          :title="offer.title"
          :content="offer.content"
          :list="offer.list"
          :text="offer.text"
        />
      </div>
    </section>
    <section class="realisations">
      <entryTitle
        :title="'Realizacje'"
        :subtitle="'Nasze realizacje'"
        :titleSize="62"
        :bottomMargin="42"
      />
      <p class="entryText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return { currSlide: 0 }
  },
  computed: {
    ...mapGetters({
      offerList: 'offer/offerList',
      slides: 'slider/slides',
    }),
  },
}
</script>
<style scoped lang="scss">
.inner {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100vw;
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
  svg:nth-child(2) {
    transform: rotate(180deg);
    margin-left: 12px;
  }
}
.entryText {
  color: white;
  padding: 0 36px 0 36px;
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
</style>
