<template>
  <div class="wrapper">
    <form>
      <input
        class="name input"
        type="text"
        placeholder="Twoje imię i nazwisko"
      />
      <input class="mail input" type="text" placeholder="Adres e-mail" />
      <div clas="row">
        <input class="phone input" type="text" placeholder="Numer telefonu" />
        <input
          class="company input"
          type="text"
          placeholder="Firma (opcjonalnie)"
        />
      </div>
      <textarea
        class="message input"
        placeholder="Twoja wiadomość..."
      ></textarea>
      <button class="submit">Wyślij wiadomość</button>
    </form>
    <div class="contact">
      <p class="title">Skontaktuj się z nami bezpośrednio</p>
      <div>
        <p>Adres:</p>
        <p>26-640 Skaryszew</p>
        <p>ul. Złota 7</p>
        <p>Telefon: 698-088-271</p>
      </div>
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.6424222278445!2d21.244624648490614!3d51.32428045029196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471867383b56d30f%3A0xfbd398022dbb76c0!2sMeble%20na%20wymiar%20Agmar!5e0!3m2!1spl!2spl!4v1631568407258!5m2!1spl!2spl"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 36px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 9px;
    flex-direction: column;
    width: 100%;
  }
}
.input {
  background: #c7c7c7;
  padding: 12px;
  width: 100%;
  height: 42px;
  border: none;
  color: #595959;
  margin: 9px 0;
}
.message {
  height: 120px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}
.contact {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #929292;
  padding: 0 36px;
  p {
    width: 100%;
    text-align: left;
  }
}
.submit {
  margin-top: 9px;
  width: 100%;
  border: none;
  background: #debe95;
  color: #21252a;
  padding: 12px 12px;
  font-weight: 700;
}
.map {
  display: none;
}
@media (min-width: 1024px) {
  form {
    min-width: 360px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 120px;
  }
  .map {
    display: block;
    width: 400px;
    height: 236px;
    margin-top: 18px;
  }
  .contact {
    display: flex;
    align-items: flex-start;
    width: 360px;
  }
  .title {
    font-size: 30px;
  }
}
@media (min-width: 1440px) {
  form {
    width: 460px;
    margin: 60px 0;
  }
  .wrapper {
    justify-content: space-between;
  }
  .contact {
    width: 50%;
  }
  .map {
    width: 100%;
    height: 60%;
  }
}
</style>
