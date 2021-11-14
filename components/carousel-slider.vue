<template>
  <div class="hdn">
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
        <div v-for="slide in slides" :key="slide.id">
          <singleSlide
            :image="slide.image"
            :title="slide.title"
            :subTitle="slide.subTitle"
            :text="slide.text"
            :route="slide.route"
          />
        </div>
      </Flicking>
    </client-only>
  </div>
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
.hdn {
  overflow: hidden;
}
.flicking-camera {
  display: flex !important;
}
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
