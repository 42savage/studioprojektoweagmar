<template>
  <div>
    <entryTransition />
    <navigation />
    <div ref="container">
      <left-bar />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  transition: {
    afterLeave(el) {
      console.log('afterLeave', el);
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
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
