<template>
  <client-only>
    <div class="box" :class="{ isActive: !active }">
      <div class="ad" v-if="!active">
        <Nuxt-link class="link" :to="route.to">{{ route.name }}</Nuxt-link>
      </div>
      <component v-if="active" :is="icon" />
      <component v-else :is="icon" :fill="'#393C46'" />
      <p class="title">{{ title }}</p>
      <p class="content">
        {{ content }}
      </p>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'icons-pictograms-bulb',
    },
    title: {
      type: String,
      default: 'Punkt #?',
    },
    content: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    fill: {
      type: String,
      default: 'white',
    },
    active: {
      type: Boolean,
      default: false,
    },
    route: {
      type: Object,
      default: () => ({
        name: 'Test',
        to: '/test',
      }),
    },
  },
}
</script>

<style lang="scss" scoped>
.isActive {
  p {
    color: #393c46;
  }
}
.ad {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 142px;
  .link {
    color: white;
    font-size: 12px;
    padding: 6px 12px;
    border: 1px solid white;
    text-decoration: none;
  }
}
.box {
  width: 180px;
  height: 180px;
  border: 1px solid #393c46;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 18px 0;
  position: relative;
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
