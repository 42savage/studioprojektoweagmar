<template>
  <div
    class="wrapTitle"
    :style="{ marginTop: topMargin + 'px', paddingTop: titleMargin + 'px' }"
  >
    <h1
      :style="{
        fontSize: titleSize + 'px',
        marginBottom: bottomMargin + 'px',
      }"
      class="title"
    >
      {{ title }}
    </h1>
    <h2 class="subtitle" :style="{ fontSize: subtitleSize + 'px' }">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tytuł',
    },
    subtitle: {
      type: String,
      default: 'Podtytuł',
    },
    titleSize: {
      type: Number,
      default: 72,
    },
    subtitleSize: {
      type: Number,
      default: 36,
    },
    bottomMargin: {
      type: Number,
      default: 72,
    },
    topMargin: {
      type: Number,
      default: 136,
    },
    titleMargin: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapTitle {
  position: relative;
  text-align: center;
  margin-top: 136px;
}
.title {
  font-size: 72px;
  font-weight: 700;
  color: #ffffff09;
}
.subtitle {
  font-weight: 300;
  color: #debe95;
  position: absolute;
  bottom: 0;
  width: 100%;
}
@media (min-width: 1024px) {
  .wrapTitle {
    text-align: left;
  }
  .title {
    font-size: 130px !important;
    padding: 0 120px;
  }
  .subtitle {
    font-size: 48px !important;
    padding: 0 120px;
  }
}
@media (min-width: 1440px) {
  #offer-title {
    h1 {
      position: relative;
    }
    h1::after {
      content: '';
      position: absolute;
      right: 10%;
      width: 260px;
      height: 36px;
      background: #24282d;
    }
    h1::before {
      content: '';
      position: absolute;
      right: 10%;
      height: 260px;
      width: 36px;
      background: #24282d;
    }
  }
}
</style>
