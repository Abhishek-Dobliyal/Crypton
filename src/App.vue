<template>
  <div class="container text-white">
    <Header heading="Crypton" subHeading="One Place To Stalk Cryptos"></Header>
    <Toolbar></Toolbar>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Toolbar from "@/components/Toolbar.vue";

import { ref } from "vue";
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
