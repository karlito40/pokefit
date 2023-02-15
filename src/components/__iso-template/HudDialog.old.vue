<script setup>
import { onMounted, ref } from 'vue'
import HudForm from '../HudForm.vue'

const DIALOG = 'dialog'
const CHALLENGE = 'challenge' 
const IDLE = 'idle'
const COMPLETED = 'completed'

const messages = [
  {
    text: 'Oh! Un Tortank sauvage apparait!',
    duration: 1000,
    // duration: 99999999,
    type: DIALOG
  },
  {
    text: 'Tortank vous lance un défi...',
    duration: 1000,
    type: DIALOG
  },
  {
    text: 'Tortank réclame...',
    duration: 1000,
    type: DIALOG
  },
  {
    text: '30x tractions...',
    duration: 999999,
    type: CHALLENGE,
    state: IDLE
  },
  {
    text: '20x burpees...',
    duration: 4600,
    type: CHALLENGE,
    state: IDLE
  },
  {
    text: `Boire 200cl d'eau...`,
    duration: 4600,
    type: CHALLENGE,
    state: IDLE
  },
  {
    text: 'Impréssionné, tortank se joint à votre équipe !',
    duration: 1400,
    type: DIALOG
  }
]

const currentMessage = ref(null)

onMounted(scrollMessage)

function scrollMessage () {
  if (!messages.length) return

  currentMessage.value = messages.shift()
  setTimeout(scrollMessage, currentMessage.value.duration)
}
</script>

<template>
  <div class="HudDialog">
    <div class="HudDialog__body">
      <div class="message">
        {{ currentMessage?.text }}
      </div>
    </div>
    
    <HudForm v-if="currentMessage?.type === CHALLENGE" />
  </div>
</template>

<style scoped>
.HudDialog {
  position: relative;
  width: 100%;
  color: white;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.65rem;
  background: #34372F;
  padding: 0.7rem;
}



.HudDialog__body {
  height: 6rem;
  background: #285067;
  border: 4px solid white;
  border-radius: 2px;
  padding: 0.6rem;
  box-shadow: 0 0 0 7px #C9A749;
  text-shadow: 1px 1px #696045;
}

.HudForm {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 10rem;
}

</style>