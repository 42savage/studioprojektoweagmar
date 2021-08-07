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
</style>
