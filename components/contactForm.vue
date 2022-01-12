<template>
  <div class="wrapper">
    <form class="flex f-center f-col" @submit.prevent="checkForm">
      <div class="error">
        <li v-for="(error, index) in error.list" :key="index">
          {{ error }}
        </li>
      </div>
      <input
        class="name input"
        type="text"
        v-model="name"
        placeholder="Twoje imię i nazwisko"
      />
      <input
        class="mail input"
        type="text"
        placeholder="Adres e-mail"
        v-model="email"
      />
      <div clas="row flex f-center f-row">
        <input
          class="phone input"
          type="text"
          placeholder="Numer telefonu"
          v-model="phone"
        />
        <input
          class="company input"
          type="text"
          placeholder="Firma (opcjonalnie)"
          v-model="company"
        />
      </div>
      <textarea
        class="message input"
        placeholder="Opisz w kiku zdaniach projekt, którego mamy się podjąć."
        v-model="body"
      ></textarea>
      <button class="submit">Wyślij wiadomość</button>
    </form>
    <div class="contact flex f-col">
      <p class="title">Znajdziesz nas</p>
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
        name="Mapa"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      company: '',
      body: '',
      email: '',
      phone: '',
      subject: '',
      showModal: {
        state: false,
        message: '',
      },
      error: {
        name: true,
        body: false,
        email: false,
        phone: false,
      },
    };
  },
  head() {
    return {
      script: [
        {
          src: 'https://smtpjs.com/v3/smtp.js',
        },
      ],
    };
  },
  methods: {
    sendEmail() {
      if (!this.error.state) {
        Email.send({
          Host: process.env.MHOST,
          Username: process.env.MUSER,
          Password: process.env.MPASS,
          To: process.env.MTO,
          From: process.env.MUSER,
          Subject: `[Projekt] Wiadomość od ${this.email}  `,
          Body: `
        Temat: ${this.subject}
        Wiadomość od: ${this.name}
        Firma: ${this.company}
        Numer telefonu: ${this.phone}
        `,
        }).then(() => {
          this.successAlert();
        });
      }
    },
    checkForm() {
      if (this.name.length === 0) {
        this.error.name = true;
      } else {
        this.error.name = false;
      }
      if (this.body.length === 0) {
        this.error.body = true;
      } else {
        this.error.body = false;
      }
      if (this.email.length === 0) {
        this.error.email = true;
      } else {
        this.error.mail = false;
      }
      if (this.phone.length === 0) {
        this.error.phone = true;
      } else {
        this.error.phone = false;
      }

      for (const [key, value] of Object.entries(this.error)) {
        if (value === true) {
          console.log(`${key}: ${value}`);
        }
      }
    },
    successAlert() {
      this.showModal.state = true;
      this.showModal.message =
        'Fantastycznie, twoja wiadomość została do nas wysłana. Wkrótce się z Tobą skonntaktujemy.';
      if (this.showModal.state === true) {
        this.tl.play();
      }
      [
        (this.name,
        this.company,
        this.body,
        this.email,
        this.phone,
        this.subject),
      ].forEach((e) => {
        e = '';
      });
      setTimeout(() => {
        this.showModal.state = false;
        this.tl.reverse();
      }, 4000);
    },
  },
  mounted() {
    this.$gsap.set(this.$refs.alertBox, {
      display: 'none',
      y: -200,
    });

    this.tl = this.$gsap.timeline({ paused: true });
    this.tl.fromTo(
      this.$refs.alertBox,
      {
        y: 100,
        display: 'none',
      },
      {
        y: -200,
        display: 'flex',
      }
    );
  },
};
</script>

<style lang="scss" scoped>
form {
  // margin: 36px;
  padding: 24px 36px;
  div {
    margin: 0 9px;
    width: 100%;
  }
}
.input {
  background: #c7c7c7;
  padding: 12px;
  width: 100%;
  margin: 0 48px;
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
  color: #debe95;
}
.contact {
  justify-content: center;
  align-items: flex-start;
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
  cursor: pointer;
}
.map {
  display: none;
}
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    width: 600px;
    margin: 0;
    padding: 0;
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
