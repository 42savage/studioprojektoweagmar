<template>
  <footer>
    <p class="cookies">
      Strona do poprawnego działania może wykorzystywać pliki cookies.
    </p>
    <p class="author">
      Projekt i realizacja <a href="https://savageagency.pl/">SAVAGE AGENCY</a>
    </p>
    <p class="materials" @click="state = !state">Materiały użyte na stronie</p>
    <div class="modal" v-if="state">
      <p class="title">Materiały użyte na stronie.</p>
      <p>Ikony:</p>
      <ul class="list">
        <li>
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
            rel="”noreferrer”"
            target="_blank"
            >Pixel perfect</a
          >
          from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="”noreferrer”"
            >www.flaticon.com</a
          >
        </li>
        <li>
          <a
            href="https://www.freepik.com"
            title="Freepik"
            rel="”noreferrer”"
            target="_blank"
            >Freepik</a
          >
          from
          <a
            href="https://www.flaticon.com/"
            rel="”noreferrer”"
            target="_blank"
            title="Flaticon"
            >www.flaticon.com</a
          >
        </li>
        <li>
          <a
            href="https://www.freepik.com"
            rel="”noreferrer”"
            target="_blank"
            title="Freepik"
            >Freepik</a
          >
          from
          <a
            href="https://www.flaticon.com/"
            rel="”noreferrer”"
            target="_blank"
            title="Flaticon"
            >www.flaticon.com</a
          >
        </li>
      </ul>
      <button class="close" @click="state = !state">Zamknij</button>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      state: false,
    };
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.author {
  font-size: 16px;
  color: white;
  text-align: center;
  width: 100%;
  margin: 80px 0;
  span {
    color: crimson;
  }
  a:visited {
    text-decoration: none;
    color: crimson;
  }
  a:link {
    text-decoration: none;
    color: crimson;
  }
}
.materials {
  position: absolute;
  bottom: 18px;
  right: 18px;
  color: rgb(66, 66, 66);
  cursor: pointer;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: #21252a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #929292;
}
.title {
  font-size: 32px;
}
.close {
  margin: 6px 0;
  background: none;
  border: none;
  text-decoration: underline;
  color: crimson;
  font-size: 16px;
  cursor: pointer;
}
.list {
  a:visited,
  a:link {
    color: #929292;
  }
}
.cookies {
  color: gray;
  margin: 0 40px;
}
@media (min-width: 1024px) {
  .cookies {
    margin: 0 140px;
  }
}
</style>
