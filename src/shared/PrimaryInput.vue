<script setup>
import { defineProps } from "vue";

const props = defineProps(["label", "placeholder", "icon"]);
</script>

<template>
  <div class="input-group">
    <input type="text" :placeholder="placeholder" />
    <span v-if="icon" class="icon"><img :src="`../${icon}`" alt="" /></span>
    <label for="">{{ props.label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.input-group {
  @apply relative;
  input {
    @apply border border-slate-700  py-4 px-4 rounded-md text-xs w-full;

    &:focus,
    &:active {
      @apply border  outline-none shadow shadow-lg;
    }
  }

  .icon {
    @apply absolute bg-white w-10 h-4 flex justify-center items-center overflow-hidden right-1;
    top: 35%;
    & img {
      @apply w-4 h-4;
    }
  }

  label {
    @apply font-normal text-xs bg-white absolute -top-2 left-3 px-2;
  }
}
</style>
