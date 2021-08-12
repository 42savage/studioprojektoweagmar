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
        d="M12 24C17.0401 24 21.1406 19.8785 21.1406 14.8125C21.1406 12.8192 20.5102 10.9248 19.3176 9.33408L12.5635 0.282609C12.4308 0.104766 12.2219 0 12 0C11.7781 0 11.5692 0.104766 11.4365 0.282609L4.68342 9.33272C3.49013 10.9237 2.85938 12.8186 2.85938 14.8125C2.85938 19.8785 6.95986 24 12 24ZM5.80945 10.1751L12 1.87884C12 1.87884 18.1912 10.176 18.1916 10.1765C19.2009 11.5222 19.7344 13.1253 19.7344 14.8125C19.7344 19.1031 16.2647 22.5938 12 22.5938C7.73527 22.5938 4.26562 19.1031 4.26562 14.8125C4.26562 13.1253 4.79911 11.5222 5.80945 10.1751Z"
        :fill="fill"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect :width="width" :height="height" :fill="fill" />
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
