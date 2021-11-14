<template>
  <div class="wrapper">
    <subTransmision />
    <div
      class="heading"
      :style="{
        background:
          'linear-gradient(0deg, #21252A 0%, rgba(0, 0, 0, 0) 29.61%), linear-gradient(180deg, #1C1F23 19.27%, rgba(0, 0, 0, 0.46) 100%), url(' +
          require(`@/assets/${specifiedOffer.backgroundURI}.jpg`) +
          ') no-repeat center center / cover',
      }"
    >
      <entryTitle
        title="Oferta"
        :subtitle="specifiedOffer.title"
        :topMargin="0"
        :titleMargin="132"
      />
      <div class="container">
        <p class="content">{{ specifiedOffer.content }}</p>
        <ul>
          <li
            v-for="element in specifiedOffer.list"
            class="list"
            :key="element.id"
          >
            <a>{{ element }}</a>
          </li>
        </ul>
        <p class="content">
          {{ specifiedOffer.text }}
        </p>
      </div>
    </div>
    <div class="options">
      <div v-for="option in offerOptions" :key="option.id">
        <single-option
          :title="option.title"
          :icon="option.icon"
          :content="option.content"
          :active="option.active"
          :route="option.route"
        />
      </div>
    </div>
    <div class="description">
      <p class="title">Kilka słów o oferowanym projekcie</p>
      <p class="text">{{ specifiedOfferContent[0].text }}</p>
      <client-only>
        <p class="title">Przykładowe projekty:</p>
        <Flicking
          :hideBeforeInit="true"
          :options="{ align: 'center', circular: true }"
        >
          <div
            v-for="image in specifiedOfferContent[0].images"
            class="singleRealisation"
            :key="image.id"
            :style="{
              'background-image':
                'url(' + require(`@/assets/offer/${image}.jpg`) + ')',
            }"
          ></div>
        </Flicking>
      </client-only>
    </div>
    <theFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  head() {
    return {
      title: this.specifiedOffer.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.specifiedOffer.seoDesc,
        },
      ],
    };
  },
  data() {
    return {
      test: true,
    };
  },
  computed: {
    ...mapGetters({
      offerOptions: 'offer/offerOptions',
      specifiedOffer: 'offer/specifiedOffer',
      specifiedOptions: 'offer/specifiedOptions',
      specifiedOfferContent: 'offer/specifiedOfferContent',
    }),
  },
  methods: {
    ...mapActions({
      setActive: 'offer/setActive',
      setNotActive: 'offer/setNotActive',
    }),
  },
  transition: {
    enter(e) {
      this.test = true;
    },
  },
  mounted() {
    this.setActive(this.specifiedOptions);
  },
  beforeDestroy() {
    this.setNotActive();
  },
};
</script>

<style lang="scss" scoped>
.singleRealisation {
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
}
.content {
  color: #929292;
  padding: 0 36px;
  font-size: 18px;
}
.list {
  list-style-position: inside;
  color: #929292;
  list-style-type: disc;
  padding: 0 36px;
  font-size: 18px;
  li {
    padding-left: 12px;
  }
}
.heading {
  min-height: 640px;
}
.options {
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.description {
  padding: 0 36px;
}
.title {
  color: #929292;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 12px;
}
.text {
  color: #929292;
}

@media (min-width: 1024px) {
  .singleRealisation {
    width: 600px;
    height: 400px;
    margin: 12px;
  }
  .description {
    padding: 0 120px;
    margin-top: 36px;
  }
  .container {
    padding: 0 120px;
  }
  .options {
    flex-direction: row;
    div {
      margin: 0 3px;
    }
  }
  .text {
    width: 400px;
    margin-bottom: 36px;
  }
}
</style>
