<script setup>
import { defineProps } from "vue";
const props = defineProps(["image", "location", "services"]);
</script>

<template>
  <div class="card">
    <div
      class="bg-cover bg-center w-36 md:w-16 h-36 md:h-16 rounded-xl mb-5 md:mb-0"
      :style="{
        'background-image': `url(${image})`
      }"
    ></div>
    <div class="flex flex-col items-start justify-center gap-2">
      <p class="font-normal text-xs">{{ location }}</p>
      <p class="font-normal text-xs">
        <span v-for="service in services" :key="service"> &middot; {{ service }} </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply rounded-xl bg-white px-4 py-5 shadow-xl md:flex w-full gap-5 cursor-pointer hover:shadow-2xl;
}
</style>
