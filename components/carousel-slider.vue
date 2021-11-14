<template>
  <client-only>
    <Flicking
      id="carousel"
      :options="{
        align: 'center',
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
        :title="slide.title"
        :subTitle="slide.subTitle"
        :text="slide.text"
        :route="slide.route"
      />
    </Flicking>
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

<style lang="scss">
#carousel {
  display: none;
  width: 100%;
  height: 100vh;
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
  #carousel {
    display: flex;
  }
}
</style>
