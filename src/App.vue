<template>
  <div class="container text-white">
    <Header heading="Crypton" subHeading="One Place To Stalk Cryptos"></Header>
    <Searchbar></Searchbar>
    <List></List>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Searchbar from "@/components/Searchbar.vue";
import List from "@/components/List.vue";

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
