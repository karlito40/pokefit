<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  monster: {
    type: Object,
    required: true
  },
})

// TODO: backgroundUrl

const src = ref()
watchEffect(async () => {
  src.value = (await import(`@/assets/img/monsters/${props.monster.id}.png`)).default
})
</script>

<template>
  <div v-if="!src">loading...</div>
  <img v-else :src="src">
</template>