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
  },
  left: {
    type: String,
    defult: ''
  }
})
</script>
<template>
  <div :class="[left]">
    <p :class="[size, color, style]">{{ text }}</p>
  </div>
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
.marginl {
  margin-left: -600px;
}
</style>
