<script setup>
import { defineProps } from "vue";

const props = defineProps(["label", "placeholder"]);
</script>

<template>
  <div class="input-group">
    <input type="text" :placeholder="placeholder" />
    <label for="">{{ props.label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.input-group {
  @apply relative;
  input {
    @apply border border-slate-700  py-4 px-4 rounded-md text-xs;

    &:focus,
    &:active {
      @apply border  outline-none shadow shadow-lg;
    }
  }

  label {
    @apply font-normal text-xs bg-white absolute -top-2 left-3 px-2;
  }
}
</style>
