<template>
  <div class="wrapper f-col">
    <div class="slider flex f-row">
      <div class="left-content">
        <div class="content">
          <p class="title">AGMAR</p>
          <p class="subtitle">Projektujemy wnętrza</p>
          <p class="bolder">Klasyczne i nowoczesne</p>
          <p class="text">
            Jesteśmy nowopowstałym studiem projektowym, które postawiło sobie za
            cel tworzenie zarówno nowoczesnych jak i klasycznych wizualiacji
            przyjmenych dla oka.
          </p>
          <button class="checkBtn flex f-row f-center">
            <div class="arrow flex f-center">
              <icons-arrow-right />
            </div>
            Sprawdź nasze realizacje
          </button>
        </div>
      </div>
      <div class="right-content">
        <div class="single-image">
          <img src="r1.jpg" alt="Image" />
        </div>
        <div class="custom-slider f-row f-center">
          <img src="custom-slider/fit1.jpg" alt="image" />
          <img src="custom-slider/fit2.jpg" alt="image" />
          <img src="custom-slider/fit3.jpg" alt="image" />
          <img src="custom-slider/fit4.jpg" alt="image" />
        </div>
      </div>
    </div>
    <div class="navigation flex f-row">
      <div class="counter flex f-center f-row">
        <p class="count">01</p>
        <div class="line"></div>
        <p class="name">Apartament "Bekas"</p>
      </div>
      <div class="arrows flex f-center f-row">
        <button>
          <icons-arrow :fill="'#565656'" />
        </button>
        <button>
          <icons-arrow :fill="'#565656'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
}
.wrapper {
  display: none;
  width: 100%;
  height: 100vh;
  padding: 162px 120px 0;
}
.title {
  font-size: 92px;
  color: #282c31;
  font-weight: bold;
}
.subtitle {
  font-size: 28px;
  color: white;
  font-weight: lighter;
  margin-top: -50px;
}
.bolder {
  font-size: 22px;
  font-weight: bold;
  color: #debe95;
}
.text {
  font-weight: 300;
  color: #b2b2b2;
  font-size: 18px;
  margin-top: 24px;
}
.checkBtn {
  background: none;
  border: none;
  color: #debe95;
  font-size: 18px;
  font-weight: bold;
  margin-top: 36px;
  cursor: pointer;
}
.arrow {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: relative;
  margin-right: 18px;
  &::after {
    content: '';
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50%;
    position: absolute;
  }
}
.content {
  max-width: 400px;
}
.count,
.name {
  color: #565656;
}
.count {
  font-size: 24px;
}
.name {
  font-size: 14px;
}
.line {
  background: #565656;
  width: 72px;
  height: 2px;
  margin: 0 12px;
}
.navigation {
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 36px;
  margin-top: 18px;
}
.arrows {
  button {
    background: none;
    border: none;
    margin: 0 18px;
    &:nth-child(2) {
      transform: rotate(180deg);
      margin-bottom: 4px;
    }
  }
}
.left-content,
.right-content {
  width: 50%;
}
.right-content {
  position: relative;
  img {
    z-index: -1;
    width: 600px;
    position: absolute;
    right: 0;
  }
}
.custom-slider {
  display: none;
  img {
    width: 160px;
    margin: 0 8px;
  }
}
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
  }
  .title {
    color: rgba(71, 71, 71, 0.815);
  }
}
@media (min-width: 1440px) {
  .single-image {
    display: none;
  }
  .custom-slider {
    display: flex;
  }
  .right-content {
    position: initial;
    img {
      position: initial;
    }
  }
}
</style>
