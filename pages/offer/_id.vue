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
      <h1>Description goes here!</h1>
      <p>{{ specifiedOfferContent[0].text }}</p>
      <client-only>
        <carousel
          :perPage="1"
          :loop="true"
          :paginationEnabled="false"
          :navigationEnabled="false"
        >
          <slide
            v-for="image in specifiedOfferContent[0].images"
            :key="image.id"
          >
            <img :src="require(`~/assets/offer/${image}.jpg`)" />
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
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
@media (min-width: 1024px) {
  .container {
    padding: 0 120px;
  }
  .options {
    flex-direction: row;
    div {
      margin: 0 3px;
    }
  }
}
</style>
