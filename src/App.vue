<script setup>
import { RouterView } from 'vue-router'
import MainMenu from './components/MainMenu.vue';
</script>

<template>
  <MainMenu />
  <RouterView />
  <!-- <RouterView name="modal" /> -->
</template>

<style scoped>
.MainMenu {
  position: absolute;
  width: 100%;
  top: 2rem; /* StatusBar offset */
}
</style>