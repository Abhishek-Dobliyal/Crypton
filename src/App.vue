<template>
  <div class="container text-white text-center sm:ml-7">
    <Header heading="Crypton" subHeading="One Place To Stalk Cryptos"></Header>
    <Searchbar></Searchbar>
    <div class="container sm:ml-10">
      <Loader v-if="showLoader"></Loader>
      <div class="container mt-12 text-xl" v-else-if="showEmpty">
        <span class="font-semibold"
          >Hmm... Could not find anything like this.</span
        >
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-4 mt-5 gap-y-3 gap-x-3 mb-3"
        v-else
      >
        <div
          class="container"
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
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Searchbar from "@/components/Searchbar.vue";
import DataContainer from "@/components/DataContainer.vue";
import Loader from "@/components/Loader.vue";

import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const showEmpty = computed(() => {
  return filteredCryptoDetails.value.length == 0;
});

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

const showLoader = computed(() => {
  return store.getters.getCryptoDetails.length == 0;
});

const filteredCryptoDetails = computed(() => {
  let currDetails = store.getters.getCryptoDetails;
  let searchQuery = store.getters.getSearchQuery;

  if (Object.keys(currDetails).length == 0) {
    return [];
  }

  if (searchQuery.length == 0) {
    return currDetails;
  }

  const filtered = currDetails.filter((detail) => {
    return detail.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return filtered;
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
