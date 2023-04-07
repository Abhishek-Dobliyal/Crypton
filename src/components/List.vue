<template>
    <ul>
        <li></li>
    </ul>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore()
const cryptoDetails = store.getters.getCryptoDetails()

</script>
