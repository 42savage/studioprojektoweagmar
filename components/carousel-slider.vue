<template>
  <client-only>
    <carousel
      id="carousel"
      :perPage="1"
      :loop="true"
      :paginationEnabled="false"
      :navigationEnabled="false"
    >
      <slide v-for="slide in slides" :key="slide.id">
        <singleSlide
          :image="slide.image"
          :title="slide.title"
          :subTitle="slide.subTitle"
          :text="slide.text"
          :route="slide.route"
        />
      </slide>
    </carousel>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      slides: 'slider/slides',
    }),
  },
}
</script>

<style lang="scss">
// repair css
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
