<template>
  <div class="wrapper flex f-center f-col">
    <p class="title">{{ title }}</p>
    <p class="content">{{ content }}</p>
    <ul v-for="element in list" :key="element.id">
      <li>{{ element }}</li>
    </ul>
    <p class="content">
      {{ text }}
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
    content: {
      type: String,
      default: 'Content goes here',
    },
    list: {
      type: Array,
    },
    text: {
      type: String,
      default: 'Some text goes here',
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
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
@media (min-width: 1024px) {
  .wrapper {
    width: 336px;
    height: 420px;
    justify-content: space-around;
  }
}
</style>
