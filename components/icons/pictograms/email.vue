<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M12.123 8.09082L17.238 -0.000179747L6.79199 -0.000179291L12.123 8.09082Z"
        :fill="fill"
      />
      <path d="M6.79199 24L17.238 24L12.123 15.909L6.79199 24Z" :fill="fill" />
      <path
        d="M3.75 1.50008L3.75 22.5001C3.75 23.2486 4.308 23.8426 5.0265 23.9551L12.903 12.0001L5.0265 0.0450782C4.308 0.157579 3.75 0.751579 3.75 1.50008Z"
        :fill="fill"
      />
      <path
        d="M13.0291 9.46515L14.4271 11.5876C14.5096 11.7136 14.5501 11.8561 14.5501 12.0001C14.5501 12.1441 14.5096 12.2866 14.4271 12.4126L13.0276 14.5351L18.9841 23.9521C19.6966 23.8366 20.2501 23.2456 20.2501 22.5001L20.2501 1.50015C20.2501 0.754648 19.6966 0.163646 18.9841 0.0481469L13.0291 9.46515Z"
        :fill="fill"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24"
          height="24"
          :fill="fill"
          transform="translate(0 24) rotate(-90)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    fill: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style></style>
