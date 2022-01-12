<template>
  <div class="cookies-alert" v-if="cookiesPolicy">
    Strona do poprawnego działania może wykorzystywać pliki cookies.<img
      src="cookie.png"
    />
    <button @click="hideCookies">x</button>
  </div>
</template>

<script>
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default {
  data() {
    return {
      cookiesPolicy: true,
    };
  },
  methods: {
    hideCookies() {
      this.cookiesPolicy = !this.cookiesPolicy;
      if (!localStorage.cookiesPolicy) {
        localStorage.cookiesPolicy = false;
      }
    },
  },
  mounted() {
    if (localStorage.cookiesPolicy === false) {
      this.cookiesPolicy = false;
      this.hideCookies();
    }
  },
};
</script>

<style scoped lang="scss">
button {
  color: white;
  position: absolute;
  right: 8px;
  top: 8px;
  border: none;
  width: 22px;
  height: 22px;
  background: none;
}
img {
  width: 42px;
  height: 42px;
  margin-left: 24px;
}
.cookies-alert {
  padding: 24px 32px;
  background: #252a30;
  position: fixed;
  left: 0;
  bottom: 0;
  color: #747e8a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@media (min-width: 1440px) {
  .cookies-alert {
    left: 60px;
  }
}
</style>
