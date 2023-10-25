<script setup>
import { defineProps } from "vue";

const props = defineProps(["text"]);
</script>

<template>
  <button class="btn-primary">
    <img src="../assets/Paper-Plane.svg" alt="" class="w-4" /><span>{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn-primary {
  @apply bg-mint-green text-black flex justify-center items-center w-fit py-3 px-3 text-xs rounded-sm gap-1;
}
</style>
