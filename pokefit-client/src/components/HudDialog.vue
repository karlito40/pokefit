<script setup>
import { onMounted, computed, ref } from 'vue'
import AnimatedText from './AnimatedText.vue';
import { createTimer } from '../libs/timer';

const props = defineProps({
  monster: {
    type: Object,
    required: true
  }
})

const DIALOG = 'dialog'
const CHALLENGE = 'challenge' 
const IDLE = 'idle'
const COMPLETED = 'completed'

console.log('huddialog', props.monster)

const leaveMessage = computed(() => ({
  text: `${props.monster.name} se moque de vous, et vous tourne le dos !`,
  type: DIALOG
}));

const messages = computed(() => {
  const { name } = props.monster

  // todo: use vue-i18n
  return [
    {
      text: `Un ${name} sauvage apparait!`,
      duration: 2000,
      type: DIALOG
    },
    {
      text: `${name} vous lance un défi...`,
      duration: 2500,
      type: DIALOG
    },
    {
      text: `${name} réclame...`,
      duration: 4000,
      type: DIALOG
    },
    {
      text: `30 tractions...`,
      duration: 999999,
      type: CHALLENGE,
      state: IDLE
    },
    {
      text: `20 burpees...`,
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
      text: `Impréssionné, ${name} se joint à votre équipe !`,
      duration: 1400,
      type: DIALOG
    }
  ]
})

const currentMessage = ref()

onMounted(scrollMessages)

function leave () {
  timer?.kill();
  currentMessage.value = leaveMessage.value;
}

let timer
function scrollMessages () {
  if (!messages.value.length) return

  currentMessage.value = messages.value.shift()
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
      :key="currentMessage"
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