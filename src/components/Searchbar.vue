<template>
  <div class="container text-center flex justify-center item-center space-x-3">
    <div
      class="relative mb-3 w-60 sm:w-96 text-center"
      data-te-input-wrapper-init
    >
      <input
        type="search"
        class="border-2 bg-black p-2 rounded-md font-semibold"
        id="exampleSearch2"
        placeholder="Search cryptos"
        v-model="query"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const query = ref("");

watch(query, () => {
  store.commit("setSearchQuery", query.value);
});
</script>
