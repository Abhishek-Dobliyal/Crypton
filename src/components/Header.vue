<template>
  <div class="container my-6">
    <header class="font-bold text-5xl">
      {{ heading }}
    </header>
    <div class="container mt-4">
      <span class="font-semibold mt-5">{{ subHeading }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: String,
  subHeading: String,
});
</script>
