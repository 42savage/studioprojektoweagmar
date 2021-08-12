<template>
  <div class="wrapper">
    <p class="title">{{ title }}</p>
    <p class="content">Indywidualny projekt w skład którego wchodzi:</p>
    <ul>
      <li>pierwszy punkt</li>
      <li>drugi punkt</li>
      <li>trzeci punkt</li>
      <li>czwarty punkt</li>
    </ul>
    <p class="content">
      Proces przebiega dosyć prosto, korzystając z narzędzi pomiarowych odlanych
      z gówna z szaletów kobylańskich pomiaru, polska język trudna.
    </p>
    <nuxt-link :to="`offer/${route}`" class="reach"
      >Dowiedz się więcej</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tytuł',
    },
    route: {
      type: String,
      default: 'Projekt #',
    },
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 6px 12px;
  border: 1px solid #393c46;
  color: #929292;
  padding: 36px;
}
.reach {
  background: #debe95;
  border: none;
  color: #21252a;
  padding: 6px 12px;
  margin-top: 36px;
  font-weight: 700;
  font-size: 18px;
}
.title {
  font-size: 24px;
  color: #debe95;
  margin-bottom: 24px;
}
ul {
  width: 100%;
  padding-left: 24px;
}
</style>
