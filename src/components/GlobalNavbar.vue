<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="w-full bg-mint-green p-4 container mx-auto rounded-tr-xl rounded-tl-xl mt-3">
    <div class="container w-full mx-auto flex justify-between p-3">
      <div class="flex justify-start items-center gap-4">
        <router-link to="/" class="text-xs text-white flex gap-2"
          ><img src="../assets/airplane-white.svg" alt="" class="inline w-5" />Find
          Flight</router-link
        >
        <router-link to="/" class="text-xs text-white flex gap-2"
          ><img src="../assets/ion_bed-white.svg" alt="" class="inline w-5" />Find
          Stays</router-link
        >
      </div>
      <router-link to="/" class="flex"
        ><img src="../assets/Logo-White.svg" alt="" class="inline w-20"
      /></router-link>
      <div class="flex justify-start items-center gap-4">
        <button class="text-white text-xs">Login</button>
        <button class="bg-white text-black font-medium text-xs py-2 px-6 rounded-lg">
          Sign up
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
