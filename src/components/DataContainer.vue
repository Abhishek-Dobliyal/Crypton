<template>
  <div class="container my-2">
    <div class="flex flex-col justify-center items-center">
      <img
        :src="props.imgUrl"
        alt=""
        class="object-contain h-12 w-12 sm:h-24 sm:w-24 my-2"
      />
      <span class="font-semibold my-2 text-lg">{{ props.name }}</span>
      <span class="font-medium my-1">Price: {{ props.price }} $</span>
      <span :class="props.change < 0 ? `text-red-500` : `text-green-400`">{{
        props.change.toFixed(3)
      }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: String,
  name: String,
  price: Number,
  change: Number,
});
</script>
