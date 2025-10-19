<script setup>
const props = defineProps({
  size: {
    type: String,
    default: '16'
  },
  color: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  style: {
    type: String,
    default: ''
  },
  left: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="title-container" :class="[left]">
    <p :class="[size, color, style]">{{ text }}</p>
  </div>
</template>

<style scoped>
.title-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: auto;
  max-width: 90%;
  text-align: center;
}

.size25 {
  font-size: 25px;
}

.dark-blue {
  color: #0f303f;
}

.style1 {
  font-family: 'Avenir';
}
</style>
