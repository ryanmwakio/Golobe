<script setup>
import { reactive } from "vue";
import SectionTitleSubtitle from "../shared/SectionTitleSubtitle.vue";
import HomePlaceCard from "./HomePlaceCard.vue";

let places = reactive([
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Istanbul, Tukey",
    services: ["Flights", "Resorts", "Hotels"]
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?auto=format&fit=crop&q=80&w=1372&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Nairobi, Kenya",
    services: ["Flights", "Resorts", "Hotels"]
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Sidney, Australia",
    services: ["Flights", "Resorts", "Hotels"]
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=1375&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Maldives",
    services: ["Flights", "Resorts", "Hotels"]
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1628531895969-df353541bafe?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Zanzibar, Tanzania",
    services: ["Flights", "Resorts", "Hotels"]
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1533412942175-10aea91943f4?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Giza, Egypt",
    services: ["Flights", "Resorts", "Hotels"]
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1545328805-926d6a0950ca?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "New York, USA",
    services: ["Flights", "Resorts", "Hotels"]
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&q=80&w=1477&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Tokyo, Japan",
    services: ["Flights", "Resorts", "Hotels"]
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1623027588467-24b2124f70b1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Brisbane, Australia",
    services: ["Flights", "Resorts", "Hotels"]
  }
]);
</script>

<template>
  <section class="places mt-40 mb-20 container mx-auto">
    <section-title-subtitle></section-title-subtitle>

    <div class="grid grid-cols-3 gap-6 container w-11/12 mx-auto my-10">
      <home-place-card
        v-for="place in places"
        :key="place.id"
        :image="place.image"
        :location="place.location"
        :services="place.services"
      ></home-place-card>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
