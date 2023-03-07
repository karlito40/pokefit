<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <menu class="MainMenu">
    <li>
      <RouterLink :to="{ name: 'home' }">
        H
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'stats' }" class="stats-btn">
        <img src="@/assets/img/icons/stats.svg">
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'pokedex' }">
        <img src="@/assets/img/icons/pokeball.svg" />
      </RouterLink>
    </li>
  </menu>
</template>

<style scoped>
menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

menu a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  box-shadow: 0 0 5px black;
  border-radius: 100%;
  margin-left: 1rem;
  background: rgba(255, 255, 255, 0.25);
}

.stats-btn {
  padding: 0.4rem;
}
</style>