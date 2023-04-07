<template>
  <div class="container text-center">
    <input type="text" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const cryptoDetails = store.getters.getCryptoDetails;
</script>
