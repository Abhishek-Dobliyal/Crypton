import { createStore } from "vuex";
import axios from "axios";

const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";

export default createStore({
  state: {
    cryptoDetails: {},
    searchQuery: "",
  },
  getters: {
    getCryptoDetails(state) {
      return state.cryptoDetails;
    },
    getSearchQuery(state) {
      return state.searchQuery;
    },
  },
  mutations: {
    setCryptoDetails(state, payload) {
      state.cryptoDetails = payload;
    },
    setSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
  },
  actions: {
    fetchCryptoData() {
      return axios.get(apiUrl);
    },
  },
  modules: {},
});
