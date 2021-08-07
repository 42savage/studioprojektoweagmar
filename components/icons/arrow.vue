<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 36 12"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 6L10 11.7735V0.226497L0 6ZM36 5L9 5V7L36 7V5Z" fill="#CECECE" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 36,
    },
    height: {
      type: Number,
      default: 12,
    },
    fill: {
      type: String,
    },
  },
}
</script>

<style></style>
