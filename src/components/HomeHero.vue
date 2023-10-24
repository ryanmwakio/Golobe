<script setup>
import { RouterLink } from "vue-router";
import PrimaryInput from "@/shared/PrimaryInput.vue";
</script>

<template>
  <section class="hero-section" style="background: url(/hero.jpg)">
    <div class="z-20">
      <h4 class="sub-text">Helping Others</h4>
      <h1 class="main-text">Live & Travel</h1>
      <h6 class="description">Special offers to suit your plan</h6>
    </div>
    <div class="overlay"></div>

    <div class="search-card">
      <div class="tabs">
        <RouterLink to="/"
          ><img src="../assets/airplane.svg" alt="" /><span>Flights</span></RouterLink
        >
        <div class="divider"></div>
        <RouterLink to="/"><img src="../assets/ion_bed.svg" alt="" /><span>Stays</span></RouterLink>
      </div>

      <div class="inputs-row">
        <div class="form-section">
          <primary-input label="From - To" placeholder="Nairobi - Mombasa"></primary-input>
        </div>
        <div class="form-section">
          <primary-input label="Trip" placeholder="Return"></primary-input>
        </div>
        <div class="form-section">
          <primary-input
            label="Departure Return"
            placeholder="07 Nov 2023 - 13 Nov 2023"
          ></primary-input>
        </div>
        <div class="form-section">
          <primary-input label="Passenger Class" placeholder="1 Passenger Economy"></primary-input>
        </div>
      </div>

      <div class="buttons-row">
        <div class="btn-group">
          <div>
            <button><img src="../assets/add-outline.svg" /> Add Promo Code</button>
          </div>
        </div>
        <div class="btn-group">
          <div>
            <button class="bg-mint-green">
              <img src="../assets/Paper-plane.svg" /> Show Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  @apply p-6 container mx-auto rounded-xl relative flex align-middle justify-center mt-5;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;

  .sub-text {
    @apply text-center text-white tracking-wider text-4xl z-10;
  }

  .main-text {
    @apply font-semibold text-6xl uppercase text-center text-white tracking-wider;
  }

  .description {
    @apply font-normal text-base tracking-wider text-center text-white;
  }
  .overlay {
    @apply absolute inset-0 bg-black opacity-20 z-10 rounded-xl;
  }

  .search-card {
    @apply bg-white px-7 py-5 w-11/12 absolute -bottom-20 z-20 rounded-xl shadow shadow-lg;

    .form-section {
      @apply bg-white w-full p-3 mt-5;
    }
  }

  .tabs {
    @apply flex flex-row gap-5;

    & a {
      @apply flex flex-row gap-2 text-sm font-semibold text-blackish-green;
    }

    .divider {
      @apply bg-slate-300 flex;
      width: 0.1rem;
    }

    & img {
      width: 1rem;
    }
  }

  .inputs-row {
    @apply flex flex-row  content-between;
  }

  .buttons-row {
    @apply mt-4 bg-white md:mr-20;
    display: flex;
    justify-content: end;
    flex-direction: row;

    button {
      @apply flex flex-row align-middle justify-center  py-3 px-4 gap-2 text-xs rounded-md;
      align-items: center;

      img {
        width: 0.7rem;
      }
    }
  }
}
</style>
