<script setup>
import Modal from './Modal.vue'
import router from '../router';
</script>

<template>
  <Modal @close="router.go(-1)">
    <slot></slot>
  </Modal>
</template>
