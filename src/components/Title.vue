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
  <div class="text" :class="[left]">
    <p :class="[size, color, style]">{{ text }}</p>
  </div>
</template>

<style scoped>

.size25 {
  font-size: 25px;
}
.size40 {
  font-size: 45px;
}
.size14 {
  font-size: 14px;
}
.dark-blue {
  color: #0f303f;
}
.white{
  color: #EAE9E8;
}
.orang {
  color:#E64926 ;
}
.style1 {
  font-family: 'Avenir';
}
.style2{
  font-family: 'Cormorant Garamond';
}
</style>
