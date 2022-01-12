<template>
  <client-only>
    <div class="wrap">
      <div class="content">
        <h1>Projektujemy wnętrza klasyczne i nowoczesne</h1>
        <p>
          Jesteśmy studiem projektowym, które postawiło sobie za cel tworzenie
          zarówno nowoczesnych jak i klasycznych wizualizacji wnętrz. Na tle
          konkurencji wyróżniamy się tym, że nasi projektanci na codzień mają
          styczność z meblami. Daje nam to pewność, że projekt wdrożony w życie
          będzie wyglądał dokładnie tak samo jak na papierze.
        </p>
        <a href="#realisations" class="realisationBtn">
          Sprawdź nasze realizacje
        </a>
      </div>
      <Flicking
        id="carousel"
        :options="{
          align: 'prev',
          circular: true,
          autoInit: true,
          horizontal: true,
          preventEventsBeforeInit: true,
        }"
      >
        <singleSlide
          v-for="slide in slides"
          :key="slide.id"
          :image="slide.image"
        />
      </Flicking>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      slides: 'slider/slides',
    }),
  },
};
</script>

<style lang="scss" scoped>
.realisationBtn {
  background: #debe95;
  border: 2px solid #debe95;
  color: black;
  padding: 6px 0;
  max-width: 300px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  pointer-events: initial;
}
.content {
  display: none;
  position: absolute;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 120px 36px 0;
  pointer-events: none;
  z-index: 2;
  max-width: 600px;
}
h1,
h2,
p {
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.527), 1px -1px 0 rgba(0, 0, 0, 0.527),
    -1px 1px 0 rgba(0, 0, 0, 0.527), 1px 1px 0 rgba(0, 0, 0, 0.527);
}
h1,
h2 {
  color: white;
}
h1 {
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 6px;
  line-height: 28px;
}
h2 {
  font-weight: normal;
  font-size: 22px;
  color: #debe95;
  margin-bottom: 18px;
}
p {
  color: white;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 36px;
}
.btn {
  color: white;
  background: #bc9666;
  text-align: center;
  padding: 6px 12px;
  text-decoration: none;
}
#carousel {
  display: none;
  width: 100%;
  height: 100vh;
  max-height: 620px;
  div {
    width: 100%;
    height: 100%;
    div {
      width: 100%;
      height: 100vh;
    }
  }
}
@media (max-width: 1023px) {
  .content {
    display: flex;
  }
  #carousel {
    display: flex;
  }
}
</style>
