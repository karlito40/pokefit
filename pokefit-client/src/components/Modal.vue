<script setup>
import { ref, onMounted } from 'vue'
import vOnClickAway from '../directives/vOnClickAway'

const emit = defineEmits(['close'])
const isVisible = ref(false)
onMounted(() => {
  // add a delay to control the animation.
  // We could replace the css transition by an animation, but whatever.
  setTimeout(() => isVisible.value = true, 10) 
  
})
function close () {
  isVisible.value = false;
  setTimeout(() => emit('close'), 100); // add a delay to run the animation
}
</script>

<template>
  <Teleport to="#app">
    <div 
      ref="$Modal"
      :class="{ 'is-visible': isVisible }"
      class="Modal"
      tabindex="-1"
      v-on-click-away="close"
    >
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.Modal {
  position: fixed;
  z-index: 999999;
  max-height: 90%;
  overflow: auto;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 10px 10px 0 0;
  transition: 0.25s all;
  opacity: 0;
  transform: translateY(2.5rem);
}
.Modal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>