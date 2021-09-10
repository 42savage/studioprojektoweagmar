<template>
  <div
    class="wrapper"
    :style="{
      'background-image': 'url(' + require(`@/assets/${image}.jpg`) + ')',
    }"
  >
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <p>
      {{ text }}
    </p>
    <nuxt-link class="btn" to="/realizacje">Sprawdź nasze realizacje</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tytuł',
    },
    subTitle: {
      type: String,
      default: 'Podtytuł',
    },
    text: {
      type: String,
      default: 'Tekst',
    },
    image: {
      type: String,
    },
    route: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  flex-shrink: 0;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 180px 36px 0;
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
  font-size: 36px;
  margin-bottom: 6px;
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
</style>
