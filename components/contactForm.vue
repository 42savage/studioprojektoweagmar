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
      <p>Adres:</p>
      <p>26-640 Skaryszew</p>
      <p>ul. Złota 7</p>
      <p>Telefon: 698-088-271</p>
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
  align-items: center;
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
</style>
