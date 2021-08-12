<template>
  <div class="wrapper">
    <div
      class="heading"
      :style="{
        background:
          'linear-gradient(0deg, #21252A 0%, rgba(0, 0, 0, 0) 29.61%), linear-gradient(180deg, #1C1F23 19.27%, rgba(0, 0, 0, 0.46) 100%), url(' +
          require(`@/assets/${image}.jpg`) +
          ') no-repeat center center / cover',
      }"
    >
      <entryTitle
        title="Oferta"
        :subtitle="$route.params.id"
        :topMargin="0"
        :titleMargin="132"
      />
      <p class="content">Indywidualny projekt w skład którego wchodzi:</p>
      <ul class="list">
        <li>pierwszy punkt</li>
        <li>drugi punkt</li>
        <li>trzeci punkt</li>
        <li>czwarty punkt</li>
      </ul>
      <p class="content">
        Proces przebiega dosyć prosto, korzystając z narzędzi pomiarowych
        odlanych z gówna z szaletów kobylańskich pomiaru, polska język trudna.
      </p>
    </div>
    <div class="options">
      <single-option :title="'Punkt #1'" :icon="'icons-pictograms-bulb'" />
      <single-option :title="'Punkt #2'" :icon="'icons-pictograms-headphone'" />
      <single-option :title="'Punkt #3'" :icon="'icons-pictograms-stack'" />
      <single-option :title="'Punkt #4'" :icon="'icons-pictograms-blur'" />
      <single-option :title="'Punkt #5'" :icon="'icons-pictograms-folder'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 's1',
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  },
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
