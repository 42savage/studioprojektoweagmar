<template>
  <div class="bar">
    <div class="socials">
      <a>
        <icons-socials-facebook :fill="'white'" :width="24" :height="24" />
      </a>
      <a>
        <icons-socials-instagram :fill="'white'" :width="24" :height="24" />
      </a>
      <a>
        <icons-socials-web :fill="'white'" :width="24" :height="24" />
      </a>
    </div>
    <a class="phone">
      <div>
        <icons-pictograms-phone :fill="'#DEBE95'" :width="34" :height="34" />
        <p>123-456-789</p>
      </div>
    </a>
    <a class="email">
      <div>
        <icons-pictograms-email :fill="'#DEBE95'" :width="34" :height="34" />
        <p>mail@mail.com</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.bar {
  z-index: 99;
  width: 60px;
  background: #2c2e36;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
}
.socials {
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #393c46;
  a {
    margin: 12px 0;
  }
}

.socials,
.phone,
.email {
  height: 33.3%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone {
  border-bottom: 2px solid #393c46;
}
.phone,
.email {
  div {
    transform: rotate(-90deg);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      transform: rotate(90deg);
      width: 100%;
    }
    p {
      width: 180px;
    }
  }
}
@media (min-width: 1440px) {
  .bar {
    display: flex;
  }
}
</style>
