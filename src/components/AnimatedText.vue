<script setup>
import { reactive, computed, onMounted, watch } from 'vue'
import { createTimer } from '../libs/timer';


// simple animation
// TODO: come back later for better animation 

const CHAR_SPEED = 20

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const splittedText = computed(() => {
  return props.text.split('').map(char => reactive({
    isVisible: false,
    char
  }))
})

onMounted(() => setTimeout(scrollText, 200))

let timer
function scrollText () {
  timer?.kill();

  const firstHiddenChar = splittedText.value.find(({ isVisible }) => isVisible === false)
  if (!firstHiddenChar) return;

  firstHiddenChar.isVisible = true
  timer = createTimer(scrollText, CHAR_SPEED)
}
</script>

<template>
  <div class="AnimatedText">
    <span
      v-for="({ char, isVisible }, index) in splittedText"
      :key="index"
      :class="{ 
        'is-visible': isVisible,
        'inline': char === ' ',
        'inline-block': char !== ' '
      }"
    >
      {{ char }}
    </span>
  </div>
</template>

<style scoped>
span {
  opacity: 0;
  transform: translateY(2px);
  transition: 0.3s all;
}

span.is-visible {
  transform: translateY(0);
  opacity: 1;
}
</style>