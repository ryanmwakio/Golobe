<script setup>
import { RouterView } from "vue-router";
import GlobalNavbar from "@/components/GlobalNavbar.vue";
</script>

<template>
  <div class="bg-white relative">
    <global-navbar></global-navbar>

    <router-view></router-view>
  </div>
</template>
