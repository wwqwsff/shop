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
.text{
  margin:0px;
}
.size25 {
  font-size: 25px;
}
.size20 {
  font-size: 20px;
}
.size18 {
  font-size: 18px;
}
.size40 {
  font-size: 45px;
}
.size14 {
  font-size: 14px;
}
.size16 {
  font-size: 16px;
}
.dark-blue {
  color: #0f303f;
}
.grey{
  color:#B7C1C5;
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
