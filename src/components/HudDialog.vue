<script setup>
import { onMounted, ref } from 'vue'
import { createTimer } from '../libs/timer';

const DIALOG = 'dialog'
const CHALLENGE = 'challenge' 
const IDLE = 'idle'
const COMPLETED = 'completed'

const leaveMessage = {
  text: 'Tortank se moque de vous, et vous tourne le dos !',
  type: DIALOG
}

const messages = [
  {
    text: 'Un Tortank sauvage apparait!',
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

onMounted(scrollMessages)

function leave () {
  timer?.kill();
  currentMessage.value = leaveMessage;
}

let timer
function scrollMessages () {
  if (!messages.length) return

  currentMessage.value = messages.shift()
  timer?.kill();
  timer = createTimer(scrollMessages, currentMessage.value.duration)
}
</script>

<template>
  <div class="HudDialog">
    {{ currentMessage?.text }}
    <div 
      v-if="currentMessage?.type === CHALLENGE"
      class="challenge-actions"
    >
      <button 
        class="btn-leave"
        @click="leave"
      >
        Abandonner
      </button>
      <button
        class="btn-next"
        @click="scrollMessages"
      >
        Continuer
      </button>
    </div>
  </div>
</template>

<style scoped>
.HudDialog {
  position: relative;
  width: 100%;
  padding: 2rem 1rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
}


.challenge-actions {
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: -1rem;
  display: flex;
  justify-content: end;
}

button {
  padding: 0.4rem 1.3rem;
  border-radius: 12px;
  font-weight: 500;
  margin-left: 1rem;
}

.btn-next {
  color: #14532d;
  background: #34d399;
  box-shadow: 2px 3px #358a35;
  text-shadow: 0px 1px #a4fd00;
}

.btn-leave {
  color: #ec4949;
  background: #fbb1b1;
  box-shadow: -2px 3px #ec4949;
  text-shadow: 0px 1px #fff4f1;
}

</style>