<script setup>
import { defineProps } from "vue";
import PrimaryButton from "./PrimaryButton.vue";

const props = defineProps(["title", "text", "btnText", "image"]);
</script>

<template>
  <div
    class="card"
    :class="['justify-center', 'items-end', 'content-center']"
    :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <div class="z-50 w-3/4 mx-auto flex justify-center items-center flex-col text-center">
      <h1 class="text-4xl font-semibold text-white tracking-wider">{{ title }}</h1>
      <p class="text-white font-normal text-sm my-3">
        {{ text }}
      </p>
      <primary-button :text="btnText"></primary-button>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply justify-center rounded-xl bg-cover bg-center p-5 flex w-full h-96 relative container;

  .overlay {
    @apply absolute inset-0 z-10 rounded-br-xl rounded-xl;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.7) 60%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
}
</style>
