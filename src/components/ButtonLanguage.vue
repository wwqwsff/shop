<script setup>
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
  <button
    class="language"
    :class="{ 'btn-active': isActive }"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>
<style scoped>
.language {
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
.btn-active {
  color: #e64926 !important;
}
</style>
