<script setup>
import { onMounted, ref } from 'vue'
import AnimatedText from './AnimatedText.vue';
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
    duration: 2000,
    type: DIALOG
  },
  {
    text: 'Tortank vous lance un défi...',
    duration: 2500,
    type: DIALOG
  },
  {
    text: 'Tortank réclame...',
    duration: 4000,
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
    <AnimatedText 
      v-if="currentMessage"
      :key="currentMessage"
      :text="currentMessage.text"
    />
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
  justify-content: flex-end;
}

button {
  padding: 0.4rem 1.3rem;
  border-radius: 12px;
  font-weight: 500;
  margin-left: 1rem;
  visibility: hidden;
  opacity: 0;
}

.btn-next {
  color: #14532d;
  background: #34d399;
  box-shadow: 2px 3px #358a35;
  text-shadow: 0px 1px #a4fd00;
  animation: 0.4s ease 2s forwards challenge-display;
}

.btn-leave {
  color: #ec4949;
  background: #fbb1b1;
  box-shadow: -2px 3px #ec4949;
  text-shadow: 0px 1px #fff4f1;
  animation: 0.4s ease 1.8s forwards challenge-display;
}

@keyframes challenge-display {
  from {
    visibility: visible;
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>