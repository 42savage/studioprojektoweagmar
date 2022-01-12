<template>
  <div ref="container" class="container">
    <subTransmision />
    <carousel-slider />
    <big-picture-slider />
    <section id="offer" class="offer">
      <entryTitle
        id="offer-title"
        :title="'Oferta'"
        :subtitle="'Nasza oferta'"
        :bottomMargin="0"
      />
      <p class="entryText">
        Jako studio projektowe zajmujemy się tworzeniem wizualizacji 3D wnętrz.
        Możesz pomóc swojej wyobraźni w zwizualizowaniu na przykład swojej
        wymarzonej kuchni. Śmiało, skontaktuj się z nami, nasi projektanci
        chętnie zaprojektują dla Ciebie twoje wymoarzone pomieszczenie.
      </p>
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
        :bottomMargin="0"
      />
      <p class="entryText">
        Do każdej realizacji podchodzimy indywidualnie. Nasze projekty to nie
        tylko sucha wizualizacja ale także propozycje układów funkcyjnych czy
        układy szuflad w szafach, a nawet rozkłady gniazdek w pomieszczeniach.
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
      <p class="entryText">
        Możesz skontaktować się z nami za pomocą wygodnej dla Ciebie formy.
        Skorzystaj z wbudowanego w strone formularza e-mail. Chyba, że
        interesuje cie bardziej bezpośrednia komunikacja, wtedy wybierz numer
        wyświetlająćy się na lewej stronie ekranu.
      </p>
      <contactForm />
    </section>
    <TheFooter />
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
      test: false,
    };
  },
  computed: {
    ...mapGetters({
      offerList: 'offer/offerList',
      slides: 'slider/slides',
    }),
  },
  methods: {
    revealSections() {
      const sections = this.$gsap.utils.toArray('section');
      sections.forEach((section) => {
        this.$gsap.fromTo(
          section.children,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              // markers: true,
              toggleActions: 'play pause resume reverse',
            },
          }
        );
      });
    },
    markMenu() {
      const sections = this.$gsap.utils.toArray('section');
      const links = this.$gsap.utils.toArray('.list li');
      sections.forEach((section) => {
        this.$gsap.fromTo(
          links.children,
          {
            color: 'white',
            opacity: 0,
          },
          {
            color: 'red',
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              // markers: true,
              toggleActions: 'play pause resume reverse',
            },
          }
        );
      });
    },
  },
  transition: {
    enter(e) {
      this.test = true;
    },
  },
  mounted() {
    this.revealSections();
    // this.markMenu();
  },
};
</script>
<style scoped lang="scss">
.info {
  color: #929292;
  padding: 48px 36px;
}
.container {
  max-width: 100vw;
  max-height: 100vh;
}
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
  padding: 0 36px;
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
