<template>
  <div class="flex justify-center">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">Logo</th>
                <th scope="col" class="px-6 py-4">Current Price ($)</th>
              </tr>
            </thead>
            <tbody
              v-for="detail in $store.getters.getCryptoDetails"
              :key="detail"
            >
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4">{{ detail.name }}</td>
                <td class="whitespace-nowrap px-6 py-4">
                  {{ detail.price_change_24h }}
                </td>
                <td class="whitespace-nowrap px-6 py-4">
                  {{ detail.current_price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchCryptoData");
});
</script>
