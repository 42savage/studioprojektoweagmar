<template>
  <nav
    v-if="this.$route.name === 'index'"
    class="main-navigation flex f-center f-row"
    v-scroll-lock="state"
  >
    <nuxt-link class="homeBtn" to="/">
      <div @click="changeState('logo')" class="logo flex f-center f-col">
        <p class="small">Studio projektowe</p>
        <p class="big">AGMAR</p>
      </div>
    </nuxt-link>
    <ul ref="list" class="list mob">
      <li @click="changeState">
        <NuxtLink class="link" to="/">Home</NuxtLink>
      </li>
      <li @click="changeState">
        <a href="#offer" class="link">Oferta</a>
      </li>
      <li @click="changeState">
        <a href="#realisations">Realizacje</a>
      </li>
      <li @click="changeState">
        <a href="#contact" class="link">Kontakt</a>
      </li>
    </ul>
    <div ref="bottom" class="bottom-contact f-col f-center">
      <div class="socials flex f-row f-center">
        <a href="https://www.facebook.com/MebleNaWymiarAgmar" target="_blank"
          ><icons-socials-facebook :fill="'#A5A5A5'" :width="24" :height="24"
        /></a>
        <a href="https://www.instagram.com/agmarmeblenawymiar/" target="_blank"
          ><icons-socials-instagram :fill="'#A5A5A5'" :width="24" :height="24"
        /></a>
        <a href="https://mebleagmar.pl/" target="_blank"
          ><icons-socials-web :fill="'#A5A5A5'" :width="24" :height="24"
        /></a>
      </div>
      <div class="contact-row flex f-row">
        <a class="button flex f-center" href="tel:698088271">Telefon</a>
        <a class="button flex f-center" href="mailto: meble@agmar.pl">Email</a>
      </div>
    </div>
    <button ref="hamBtn" @click="changeState" class="hamButton flex">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
  </nav>
  <nav class="main-navigation" v-else>
    <nuxt-link class="homeBtn" to="/">
      <div @click="changeState('logo')" class="logo">
        <p class="small">Studio projektowe</p>
        <p class="big">AGMAR</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/" class="backButton">
      <icons-smallArrow />
    </nuxt-link>
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
    changeState(e) {
      if (window.matchMedia('(max-width: 620px)').matches) {
        // If user clicks on logo go back to homepage;
        // If users is on index page and scrolled at least 800px down scoll top
        // If menu is opened close menu and set state to false because of body overflow locked
        if (e === 'logo') {
          this.tl.reverse()
          this.state = false
          if (
            this.state === false &&
            this.$route.name === 'index' &&
            window.scrollY > 800
          ) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          // if click comes from natural menu button on menu link just play/reverse menu animation
        } else {
          this.state = !this.state
          if (this.state) {
            this.tl.play()
          } else {
            this.tl.reverse()
          }
        }
      }
    },
  },
  mounted() {
    console.log(this.$route)
    if (
      window.matchMedia('(max-width: 620px)').matches &&
      // powoduje blad gdy wejdzie sie w jakas sekcjew i wroci z powrotem menu nie chce sie otwrozyc
      this.$route.name === 'index'
    ) {
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
    }
  },
}
</script>

<style scoped lang="scss">
.homeBtn {
  z-index: 99;
}
.homeBtn {
  text-decoration: none;
}
.main-navigation {
  justify-content: space-between;
  padding: 48px 36px 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}
.logo {
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
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.socials {
  margin-bottom: 36px;
  svg {
    margin: 0 18px;
  }
}
.contact-row {
  border-top: 1px solid #393c46;
  width: 100%;
  .button {
    background: none;
    border: none;
    width: 100%;
    height: 60px;
    font-size: 24px;
    color: white;
    text-decoration: none;
    font-weight: 200;
    &:nth-child(1) {
      border-right: 1px solid #393c46;
    }
  }
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.backButton {
  width: 36px;
  height: 36px;
  background: none;
  border: none;
}
@media (min-width: 1024px) {
  .main-navigation {
    padding: 60px 120px;
  }
  .logo {
    border-left: 1px solid white;
    padding-left: 24px;
  }
  .hamButton {
    display: none;
  }
  .list {
    display: flex;
    width: auto;
    justify-content: flex-end;
    opacity: initial;
    flex-direction: row;
    background: none;
    height: auto;
    position: initial;
    padding: 0;
    margin: 0;
    li {
      font-size: 18px;
      font-weight: 500;
      margin: 0 30px;
      width: auto;
      position: relative;
      &:nth-child(1)::after,
      &:nth-child(2)::after {
        content: '';
        width: 6px;
        height: 6px;
        background: #debe95;
        position: absolute;
        border-radius: 50%;
        left: 80px;
        top: 50%;
        transform: translate(-10%, -50%);
      }
      &:nth-child(3)::after {
        content: '';
        width: 6px;
        height: 6px;
        background: #debe95;
        position: absolute;
        border-radius: 50%;
        left: 110px;
        top: 50%;
        transform: translate(-10%, -50%);
      }
    }
  }
  .main-navigation {
    display: flex;
    flex-direction: row;
  }
}
</style>
