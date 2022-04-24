export const state = () => ({
  showVideo: false,
});
export const mutations = {
  toggleVideo(state) {
    state.showVideo = !state.showVideo;
  },
};
export const actions = {
  toggleVideo({ commit }) {
    commit('toggleVideo');
  },
};
