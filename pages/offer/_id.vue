<template>
  <div class="wrapper">
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
      <p class="content">{{ specifiedOffer.content }}</p>
      <ul v-for="element in specifiedOffer.list" class="list" :key="element.id">
        <li>{{ element }}</li>
      </ul>
      <p class="content">
        {{ specifiedOffer.text }}
      </p>
    </div>
    <div class="options">
      <div v-for="option in offerOptions" :key="option.id">
        <single-option
          :title="option.title"
          :icon="option.icon"
          :content="option.content"
          :active="option.active"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      offerOptions: 'offer/offerOptions',
      specifiedOffer: 'offer/specifiedOffer',
    }),
    specifiedOptions() {
      const result = []
      const match = this.offerOptions.filter((offer) => {
        if (offer.contains.includes(this.specifiedOffer.name)) {
          return offer
        }
      })
      for (let i = 0; i < this.offerOptions.length; i++) {
        if (this.offerOptions[i] === match[i]) {
          this.$store.dispatch('offer/setActive', match[i])
          result.push(match[i])
        }
      }
      return result
    },
  },
  methods: {},

  mounted() {},
}
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
</style>
