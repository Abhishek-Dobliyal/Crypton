<template>
  <div class="container text-center flex justify-center item-center space-x-3">
    <div
      class="relative mb-3 w-60 sm:w-96 text-center"
      data-te-input-wrapper-init
    >
      <input
        type="search"
        class="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-2"
        id="exampleSearch2"
        placeholder="Search cryptos"
      />
      <label
        for="exampleSearch2"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:text-white peer-focus:bg-black px-1"
        >Search Cryptos</label
      >
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const cryptoDetails = store.getters.getCryptoDetails;
</script>
