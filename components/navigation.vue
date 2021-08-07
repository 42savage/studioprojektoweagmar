<template>
  <nav class="main-navigation">
    <div class="logo">
      <p class="small">Studio projektowe</p>
      <p class="big">AGMAR</p>
    </div>
    <ul ref="list" class="list mob">
      <li @click="changeState">
        <NuxtLink class="link" to="/">Home</NuxtLink>
      </li>
      <li @click="changeState">
        <NuxtLink class="link" to="/oferta">Oferta</NuxtLink>
      </li>
      <li @click="changeState">Realizacje</li>
      <li @click="changeState">Kontakt</li>
    </ul>
    <div ref="bottom" class="bottom-contact">
      <div class="socials">
        <icons-socials-facebook :fill="'#A5A5A5'" :width="24" :height="24" />
        <icons-socials-instagram :fill="'#A5A5A5'" :width="24" :height="24" />
        <icons-socials-web :fill="'#A5A5A5'" :width="24" :height="24" />
      </div>
      <div class="contact-row">
        <button>Telefon</button>
        <button>Email</button>
      </div>
    </div>
    <button ref="hamBtn" @click="changeState" class="hamButton">
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
      tl: this.$gsap.timeline({ paused: true }),
    }
  },
  methods: {
    changeState() {
      this.state = !this.state
      if (this.state) {
        this.tl.play()
      } else {
        this.tl.reverse()
      }
    },
  },
  mounted() {
    const tl = this.tl
    tl.to([this.$refs.bottom, this.$refs.list], {
      display: 'flex',
      opacity: 1,
    })
    tl.from(this.$refs.list.children, {
      x: 200,
      opacity: 0,
      stagger: {
        each: 0.1,
      },
    })
      .from(
        this.$refs.bottom.children,
        {
          y: 100,
          opacity: 0,
          stagger: 0.1,
        },
        '<'
      )
      .to(
        this.$refs.hamBtn.children[2],
        {
          rotation: 45,
          yPercent: -500,
        },
        '30%-=menu'
      )
      .to(
        this.$refs.hamBtn.children[0],
        {
          rotation: -45,
          width: '24px',
          yPercent: 500,
        },
        '30%-=menu'
      )
      .to(
        this.$refs.hamBtn.children[1],
        {
          visibility: 'hidden',
        },
        '50%-=menu'
      )
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
  top: 0;
}
.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 999;
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
  z-index: 999;
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

.mob {
  color: white;
  background: #21252a;
  list-style-type: none;
  display: none;
  opacity: 0;
  flex-direction: row;
  font-size: 48px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 124px 36px 0 36px;
  li {
    margin: 18px 0;
    font-weight: 200;
    &:nth-child(1) {
      font-weight: 300;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
}
.bottom-contact {
  display: none;
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
  margin-bottom: 36px;
  svg {
    margin: 0 18px;
  }
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
