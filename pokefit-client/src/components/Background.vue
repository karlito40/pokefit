<script setup>
import { AVAILABLE_BACKGROUNDS } from '../game/constants'

defineProps({
  theme: {
    type: String,
    validator: (theme) => AVAILABLE_BACKGROUNDS.includes(theme)
  }
})
</script>

<template>
  <div 
    :style="{
      background: `url('/backgrounds/${theme}.png') no-repeat center center`,
      backgroundSize: 'cover'
    }"
    class="Background"
    
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.Background {
  min-height: 100vh;
}
</style>
