<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button class="btn" :class="{ 'btn-active': isActive }" @click="handleClick">
    {{ text }}
  </button>
</template>

<style scoped>
.btn {
  font-family: 'Avenir';
  color: #0f303f;
  font-size: 16px;
  margin-top: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  font-family: 'Avenir';
  outline: none;
  width: auto;
  height: auto;
  padding-top: 20px;
}
.btn-active {
  color: #b7c1c5 !important;
}
</style>
