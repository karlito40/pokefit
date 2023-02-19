<script setup>
import BackgroundCity from '../components/BackgroundCity.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <BackgroundCity class="HomeView">
    <RouterLink :to="{ name: 'battle' }">
      Search...
    </RouterLink>

    <RouterView />
  </BackgroundCity>
</template>

<style scoped>
.HomeView {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>