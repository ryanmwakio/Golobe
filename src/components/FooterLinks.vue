<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["links"]);
</script>

<template>
  <div>
    <h3 class="text-blackish-green text-xl font-semibold mb-3">{{ links.title }}</h3>
    <ul>
      <li
        class="font-normal text-xs text-slate-700 mb-3"
        v-for="link in links.links"
        :key="link.id"
      >
        <router-link to="/">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
