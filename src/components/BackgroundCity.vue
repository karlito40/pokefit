<template>
  <div class="BackgroundCity">
    <slot></slot>
  </div>
</template>

<style scoped>
.BackgroundCity {
  background: url('@/assets/img/backgrounds/city.jpeg') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
}
</style>