<script setup>
import { RouterView } from "vue-router"
import GlobalNavbar from "@/components/GlobalNavbar.vue"
</script>

<template>
  <div class="bg-white">
    <global-navbar></global-navbar>

    <router-view></router-view>
  </div>
</template>
