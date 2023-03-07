<script setup>
import { sample } from 'lodash-es'
import Background from '../components/Background.vue';
import HudDialog from '../components/HudDialog.vue'
import PokemonLoader from '../components/PokemonLoader.vue'
import monsters, { findBackground } from '../game/monsters'

const monster = sample(monsters)
const backgroundTheme = findBackground(monster)
</script>

<template>
  <Background
    :theme="backgroundTheme"
    class="BattleView"
  >
    <section class="battle">
      <PokemonLoader  
        :monster="monster" 
        class="monster"
      />
    </section>
    <HudDialog :monster="monster"/>
  </Background>
</template>


<style scoped>
.battle {
  position: absolute;
  top: calc(50% - 2rem);
  left: 50%;
  transform: translate(-50%, -50%);
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

.HudDialog {
  position: absolute;
  bottom: 2rem;
}

.monster {
  position: relative;
  z-index: 2;
}
</style>