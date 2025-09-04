<script setup>
const props = defineProps({
  size: {
    type: String,
    defult: '16'
  },
  color: {
    type: String,
    defult: ''
  },
  text: {
    type: String,
    defult: ''
  },
  style: {
    type: String,
    defult: ''
  }
})
</script>
<template>
  <p :class="[size, color, style]">{{ text }}</p>
</template>
<style scoped>
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
