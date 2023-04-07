import { createStore } from "vuex";
import axios from "axios";

const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

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
  actions: {
    fetchCryptoData(state) {
      axios
        .get(apiUrl)
        .then((res) => {
          state.commit("setCryptoDetails", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
