<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isActiveOrange:{
    type: Boolean,
    default:false
  }
})
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>
<template>
  <button
    class="button"
    :class="{ 'button--active': isActive, 'button--active--orange':isActiveOrange }"
    
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>
<style scoped>
.button{
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
  font-size: 16px;
  margin-top: 20px;
  color: #0f303f;
}
.button--active {
  color: #B7C1C5 !important;
}
.button--active--orange{
  color: #E64926 !important;
}
</style>
