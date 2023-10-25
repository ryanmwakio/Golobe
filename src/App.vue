<script setup>
import { RouterView } from "vue-router";
import GlobalNavbar from "@/components/GlobalNavbar.vue";
import FooterSection from "./shared/FooterSection.vue";
</script>

<template>
  <div class="bg-white relative" style="background-color: #fafbfc">
    <global-navbar></global-navbar>

    <router-view></router-view>

    <footer-section></footer-section>
  </div>
</template>
