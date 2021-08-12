<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M16 22.0029L5.59973 17.2082C5.63573 17.2299 4.67949 16.7979 4 16.4094C4 16.9892 4.14549 18.0519 4.68627 18.3384L14.8683 22.9156C15.7683 23.3402 16.156 23.3402 17.131 22.9156L27.313 18.3384C27.8162 18.1044 28 17.0026 28 16.4094C27.3453 16.7371 26.4182 17.2044 26.4002 17.2082L16 22.0029ZM16 2.02514C16.075 2.11291 16.0555 2.04314 16 2.02514V2.02514ZM4.68627 13.5437L14.8683 18.1209C15.7683 18.5454 16.156 18.5454 17.131 18.1209L27.313 13.5437C27.8162 13.3097 28 12.2079 28 11.6146C27.3453 11.9424 26.4182 12.4097 26.4002 12.4134L16 17.2082L5.59973 12.4134C5.63573 12.4352 4.67949 12.0031 4 11.6146C4 12.1944 4.14549 13.2572 4.68627 13.5437ZM4.68627 8.74891L14.8683 13.3262C15.7683 13.7507 16.156 13.7507 17.131 13.3262L27.313 8.74891C28.063 8.39942 28.0878 6.91291 27.313 6.4884L17.131 1.1124C16.3315 0.638396 15.7683 0.663141 14.8682 1.1124L4.68627 6.4884C3.91149 6.98789 3.88675 8.3244 4.68627 8.74891ZM16 2.02514L26.4002 7.61863L16 12.0017L5.59973 7.61863L16 2.02514Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        :width="width"
        :height="height"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
  },
}
</script>

<style></style>
