<template>
  <div class="wrapper">
    <div class="close-wrapper">
      <button class="close" @click="toggleVideo">
        <div class="line"></div>
        <div class="line"></div>
      </button>
    </div>
    <div class="video-modal">
      <iframe
        src="https://player.vimeo.com/video/699491621?h=8ee99b7baa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="Właśnie tak to robimy"
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['toggleVideo']),
  },
};
</script>
<style scoped lang="scss">
.close-wrapper {
  z-index: 999;
}
.wrapper {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 20;
}
.video-modal {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.819);
  position: relative;
  z-index: -1;
  display: flex;
  place-content: center;
}
iframe {
  width: 80%;
  height: 80%;
  margin-top: 4%;
}
.close {
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  position: absolute;
  right: 2%;
  cursor: pointer;
  display: flex;
  place-content: center;
  flex-direction: column;
  top: 2%;
  .line {
    width: 100%;
    height: 4px;
    margin: 2px 0;
    background: white;
    &:nth-child(1) {
      transform: rotate(45deg);
      margin: -6px 0;
    }
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
}
</style>
