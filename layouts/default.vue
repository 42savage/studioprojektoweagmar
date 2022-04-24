<template>
  <div ref="container" class="dynia">
    <theVideo v-if="showVideo" v-scroll-lock="showVideo" />
    <messenger />
    <entryTransition />
    <navigation />
    <div>
      <left-bar />
      <Nuxt />
    </div>
    <!-- <cookies /> -->
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['showVideo']),
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
body {
  background: #21252a;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #18191d;
}
::-webkit-scrollbar-thumb {
  background: #21252a;
}
</style>
