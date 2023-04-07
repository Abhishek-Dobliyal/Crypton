<template>
  <div class="container text-white">
    <Header heading="Crypton" subHeading="One Place To Stalk Cryptos"></Header>
    <Searchbar></Searchbar>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-5 gap-y-3">
      <div
        class="container rounded-md"
        v-for="details in filteredCryptoDetails"
        :key="details"
      >
        <DataContainer
          :name="details.name"
          :imgUrl="details.image"
          :price="details.current_price"
          :change="details.price_change_percentage_24h"
        ></DataContainer>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Searchbar from "@/components/Searchbar.vue";
import DataContainer from "@/components/DataContainer.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  const apiPromise = store.dispatch("fetchCryptoData");
  apiPromise
    .then((res) => {
      console.log(res.data);
      store.commit("setCryptoDetails", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const filteredCryptoDetails = computed(() => {
  const currDetails = store.getters.getCryptoDetails;
  if (Object.keys(currDetails).length == 0) {
    return currDetails;
  }
  const searchQuery = store.getters.getSearchQuery;

  return currDetails.filter((detail) => {
    return detail.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
});
</script>

<style>
body {
  background-color: black;
}

#app {
  font-family: "Source Code Pro", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
