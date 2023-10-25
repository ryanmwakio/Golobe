<script setup>
import SectionTitleSubtitle from "../shared/SectionTitleSubtitle.vue";
import { reactive } from "vue";
import vue3HorizontalList from "vue3-horizontal-list";
import ReviewCard from "../shared/ReviewCard.vue";

const items = reactive(
  [...Array(20).keys()].map((i) => {
    return { i, title: `Responsive`, content: `Content` };
  })
);
</script>

<template>
  <section class="mb-20">
    <div class="container mx-auto mb-10">
      <section-title-subtitle
        title="Reviews"
        description="What people say about Golobe facilities"
        btnTitle="See all"
      ></section-title-subtitle>
    </div>

    <section class="bg-transparent p-2 w-full container mx-auto">
      <vue3-horizontal-list
        :items="items"
        :options="{
          responsive: [{ end: 576, size: 1 }, { start: 576, end: 768, size: 2 }, { size: 3 }]
        }"
      >
        <div><review-card /></div>
      </vue3-horizontal-list>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
