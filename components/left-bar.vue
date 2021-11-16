<template>
  <div class="bar f-col">
    <div class="socials f-center f-col">
      <a href="https://www.facebook.com/studioprojektowagmar" target="_blank">
        <icons-socials-facebook :fill="'white'" :width="24" :height="24" />
      </a>
      <a href="https://www.instagram.com/agmarmeblenawymiar/" target="_blank">
        <icons-socials-instagram :fill="'white'" :width="24" :height="24" />
      </a>
      <a href="https://mebleagmar.pl/" target="_blank">
        <icons-socials-web :fill="'white'" :width="24" :height="24" />
      </a>
    </div>
    <div class="phone">
      <a href="tel:698088271">
        <icons-pictograms-phone :fill="'#DEBE95'" :width="34" :height="34" />
        <span>698-088-271</span>
      </a>
    </div>
    <div class="email">
      <a class="email" href="mailto:daniel.meble@wp.pl">
        <icons-pictograms-email :fill="'#DEBE95'" :width="34" :height="34" />
        <span>kontakt@agmar.pl</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
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
  justify-content: space-between;
}
.socials {
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
  a {
    transform: rotate(-90deg);
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      transform: rotate(90deg);
      width: 100%;
    }
    span {
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
