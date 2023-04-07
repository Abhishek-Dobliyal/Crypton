import { createStore } from "vuex";

export default createStore({
  state: {
    cryptoDetails: {},
  },
  getters: {
    getCryptoDetails(state) {
      return state.cryptoDetails;
    },
  },
  mutations: {
    setCryptoDetails(state, payload) {
      state.cryptoDetails = payload;
    },
  },
  actions: {},
  modules: {},
});
