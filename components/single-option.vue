<template>
  <div class="box">
    <!-- <icons-pictograms-bulb /> -->
    <component :is="icon" />
    <p class="title">{{ title }}</p>
    <p class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'bulb',
    },
    title: {
      type: String,
      default: 'Punkt #?',
    },
    icon: {
      type: String,
      default: 'icons-pictograms-bulb',
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 180px;
  height: 180px;
  border: 1px solid #393c46;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 18px 0;
  &:nth-child(1) {
    margin-top: 0;
  }
}
.content {
  text-align: center;
  font-size: 14px;
  color: white;
  width: 142px;
}
.title {
  font-size: 18px;
  color: white;
  margin: 16px 0 12px 0;
}
</style>
