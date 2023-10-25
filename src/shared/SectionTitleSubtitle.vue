<script setup>
import { defineProps } from "vue";
const props = defineProps(["title", "description", "btnTitle"]);
</script>

<template>
  <section class="flex justify-between items-center w-11/12 mx-auto">
    <div>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
    <div>
      <button class="btn-outline">{{ btnTitle }}</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  @apply text-3xl font-semibold text-black;
}

.description {
  @apply text-sm font-normal my-2;
}

.btn-outline {
  @apply border border-mint-green text-xs font-medium py-2 px-5 rounded-md;
}
</style>
