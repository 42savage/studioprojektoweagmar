<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 15 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 25L2 13L14 1" :stroke="fill" stroke-width="2" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 15,
    },
    height: {
      type: Number,
      default: 26,
    },
    fill: {
      type: String,
      default: '#DCDCDC',
    },
  },
}
</script>

<style></style>
