<template>
  <div class="container">
    <div class="slider">
      <div ref="slides" class="inner">
        <slide :image="'s1'" />
        <slide :image="'s2'" />
        <slide :image="'s3'" />
      </div>
      <div class="slider-navigation">
        <div class="counter">
          <p>0{{ this.count + 1 }} / 0{{ slidesLength }}</p>
        </div>
        <div class="controls"><icons-arrow /><icons-arrow /></div>
      </div>
    </div>
    <div class="offer">
      <entryTitle :title="'Oferta'" :subtitle="'Nasza oferta'" />
      <offerBox :route="'Projekt wykonawczy'" :title="'Projekt wykonawczy'" />
      <offerBox :route="'Projekt koncepcyjny'" :title="'Projekt koncepcyjny'" />
      <offerBox :route="'Projekt kuchni'" :title="'Projekt kuchni'" />
    </div>
    <div class="realisations">
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
    </div>
    <div class="contact">
      <entryTitle
        :title="'Kontakt'"
        :subtitle="'Skontaktuj się z nami'"
        :titleSize="78"
        :subtitleSize="30"
        :bottomMargin="0"
      />
      <contactForm />
    </div>
    <div class="footer">
      <p class="author">Copryright <span>Strony internetowe Radom</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      slidesLength: 0,
    }
  },
  mounted() {
    this.slidesLength = this.$refs.slides.children.length
  },
}
</script>
<style scoped lang="scss">
.slider {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100vw;
  flex-shrink: 0;
  height: 100vh;
  position: relative;
  z-index: -1;
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
