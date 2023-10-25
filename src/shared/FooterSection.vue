<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";
import FooterLinks from "../components/FooterLinks.vue";

const items = reactive([
  {
    id: 1,
    title: "Our Destinations",
    links: [
      {
        id: 1,
        name: "Canada",
        link: "/"
      },
      {
        id: 2,
        name: "Alaska",
        link: "/"
      },
      {
        id: 3,
        name: "France",
        link: "/"
      },
      {
        id: 4,
        name: "Iceland",
        link: "/"
      }
    ]
  },
  {
    id: 2,
    title: "Our Activities",
    links: [
      {
        id: 1,
        name: "Northern Lights",
        link: "/"
      },
      {
        id: 2,
        name: "Cruising & Sailing",
        link: "/"
      },
      {
        id: 3,
        name: "Multi-Activities",
        link: "/"
      },
      {
        id: 4,
        name: "Kayaing",
        link: "/"
      }
    ]
  },
  {
    id: 2,
    title: "Travel Blogs",
    links: [
      {
        id: 1,
        name: "Bali Travel Guide",
        link: "/"
      },
      {
        id: 2,
        name: "Kenya Travel Guide",
        link: "/"
      },
      {
        id: 3,
        name: "Peru Travel Guide",
        link: "/"
      },
      {
        id: 4,
        name: "South Africa Travel ",
        link: "/"
      }
    ]
  },
  {
    id: 3,
    title: "About Us",
    links: [
      {
        id: 1,
        name: "Our Story",
        link: "/"
      },
      {
        id: 2,
        name: "Work With Us",
        link: "/"
      }
    ]
  },
  {
    id: 4,
    title: "Contact Us",
    links: [
      {
        id: 1,
        name: "Our Story",
        link: "/"
      },
      {
        id: 2,
        name: "Work With Us",
        link: "/"
      }
    ]
  }
]);
</script>

<template>
  <div class="rounded-xl container mx-auto flex justify-between mb-20" style="background: #cdeae1">
    <div class="pl-10 py-8">
      <h1 class="w-3 font-semibold text-4xl text-blackish-green mb-4">Subscribe Newsletter</h1>
      <h3 class="text-blackish-green font-medium text-xl">The Travel</h3>
      <p class="text-slate-700 text-xs my-4">
        Get inspired! Receive travel discounts, tips and behind the scenes stories.
      </p>

      <div class="flex justify-between gap-2">
        <input
          type="text"
          placeholder="Your email address"
          class="bg-white text-black text-xs py-3 px-4 rounded-md w-full active:outline-none focus:outline-none"
        />
        <button class="bg-blackish-green text-white py-3 px-4 text-xs rounded-md">Subscribe</button>
      </div>
    </div>
    <div>
      <div>
        <img src="../assets/mailbox.svg" alt="" class="mr-10" />
      </div>
    </div>
  </div>
  <div class="bg-mint-green" style="z-index: 10 !important">
    <div class="container mx-auto w-full justify-between pt-14 pb-14 flex items-start">
      <div>
        <router-link to="/">
          <img class="w-20 mb-5" src="../assets/footer-logo.svg" alt="" />
        </router-link>
        <div class="flex gap-3">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img class="w-4" src="../assets/footer-facebook.svg" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img class="w-4" src="../assets/footer-twitter.svg" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img class="w-4" src="../assets/footer-youtube.svg" alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img class="w-4" src="../assets/footer-instagram.svg" alt="" />
          </a>
        </div>
      </div>

      <footer-links v-for="item in items" :key="item.id" :links="item"></footer-links>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
