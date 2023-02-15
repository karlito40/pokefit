<script setup>
import { ref } from 'vue'
import { sample } from 'lodash-es'
import HudDialog from '../components/HudDialog.vue'
import PokemonLoader from '../components/PokemonLoader.vue'
import monsters from '../game/monsters'

const monster = ref(sample(monsters))
</script>

<template>
  <main>
    <menu>
      <li>
        <button class="pokedex-btn">
          <img src="@/assets/img/icons/pokeball.svg">
        </button>
      </li>
    </menu>
    
    <section class="battle">
      <PokemonLoader  
        :monster="monster" 
        class="monster"
      />
    </section>
    <HudDialog :monster="monster"/>
  </main>
</template>


<style scoped>
main {
  background: url('@/assets/img/backgrounds/forest-sun.png') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
}

menu {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.pokedex-btn {
  display: block;
  width: 2rem;
  box-shadow: 0 0 5px black;
  border-radius: 100%;
}


.battle {
  position: absolute;
  top: calc(50% - 2rem);
  left: 50%;
  transform: translate(-50%, -50%);
}

.hp-bar {
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  border-radius: 2px;
  font-size: 0.4rem;
  line-height: 0.8rem;
  text-align: center;
  color: white;
  background: red;
} 

.HudDialog {
  position: absolute;
  bottom: 2rem;
}


.battle::before {
  position: absolute;
  bottom: 0;
  display: block;
  content: '';
  width: 120%;
  height: 15%;
  background:rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  transform: translateX(-5%);
}

.monster {
  position: relative;
  z-index: 2;
}
</style>