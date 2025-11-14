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
  },
  size: {
    type: String,
    default: 16
  },
  color:{
    type:String,
    default: ''
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
    :class="[{ 'button--active': isActive, 'button--active--orange':isActiveOrange,}, size, color,]"
    
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
.small-size{
  font-size: 14px !important;
}
.grey{
  color: #B7C1C5 !important;
}
.orang {
  color:#E64926 !important;
}
.normall-size{
  font-size: 25px !important;
  font-family: 'Cormorant Garamond';

}
</style>
