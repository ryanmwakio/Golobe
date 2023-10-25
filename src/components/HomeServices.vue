<script setup>
import { reactive } from "vue";
import CardOverlay from "../shared/CardOverlay.vue";

let services = reactive([
  {
    id: 1,
    title: "Flights",
    text: "Search Flights & Places Hire to our most popular destinations",
    btnText: "Show Flights",
    image:
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Hotels",
    text: "Search hotels & Places Hire to our most popular destinations",
    btnText: "Show Hotels",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]);
</script>

<template>
  <div class="container mx-auto mb-20">
    <div class="grid grid-cols-2 gap-6 container mx-auto w-11/12">
      <card-overlay
        v-for="service in services"
        :key="service.id"
        :title="service.title"
        :text="service.text"
        :btnText="service.btnText"
        :image="service.image"
      ></card-overlay>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
