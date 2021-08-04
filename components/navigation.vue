<template>
  <nav class="main-navigation">
    <div class="logo">
      <p class="small">Studio projektowe</p>
      <p class="big">AGMAR</p>
    </div>
    <ul class="list" :class="{ mob: state }" v-show="state">
      <li>O nas</li>
      <li>Oferta</li>
      <li>Realizacje</li>
      <li>Kontakt</li>
    </ul>
    <div class="bottom-contact" v-show="state">
      <div class="socials">facebook icon</div>
      <div class="contact-row">
        <button>Telefon</button>
        <button>Email</button>
      </div>
    </div>
    <button @click="changeState" class="hamButton">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      state: false,
    }
  },
  methods: {
    changeState() {
      this.state = !this.state
    },
  },
}
</script>

<style scoped lang="scss">
.main-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 48px 36px 0;
  width: 100%;
  position: fixed;
}
.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  .small {
    font-size: 12px;
  }
  .big {
    font-size: 24px;
  }
}
.hamButton {
  background: none;
  border: none;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  z-index: 2;
  .line {
    width: 36px;
    height: 3px;
    background: white;
    margin: 6px 0;
    &:nth-child(3) {
      width: 24px;
    }
  }
}
.list {
  color: white;
  list-style-type: none;
  display: flex;
  flex-direction: row;
}
.mob {
  font-size: 48px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 124px 36px 0 36px;
  li {
    margin: 24px 0;
    font-weight: 200;
    &:nth-child(1) {
      font-weight: 300;
    }
  }
}
.bottom-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.socials {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.contact-row {
  display: flex;
  flex-direction: row;
  border-top: 1px solid #393c46;
  width: 100%;
  button {
    background: none;
    border: none;
    width: 100%;
    height: 60px;
    font-size: 24px;
    color: white;
    font-weight: 200;
    &:nth-child(1) {
      border-right: 1px solid #393c46;
    }
  }
}
</style>
