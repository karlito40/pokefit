<script setup>
import Card from '../components/Card.vue'
import Background from '../components/Background.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Background
    theme="city"
    class="HomeView"
  >
    <Card class="w-full mb-4">
      120/151 Pokemons
    </Card>

    <div class="summary mb-8">
      <Card>
        200 Squats
      </Card>
      
      <Card>
        1200 Tractions
      </Card>
    </div>

    <RouterLink :to="{ name: 'battle' }">
      Search...
    </RouterLink>

    <RouterView />
  </Background>
</template>

<style scoped>
.HomeView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.summary {
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}
</style>