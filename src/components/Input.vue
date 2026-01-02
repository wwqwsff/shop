<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
   text1: {
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
  },
  colorBackground:{
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
 <div class="serch">
        <p class="serch__text">{{ text1 }}</p>
        <input type="text" class="serch__input" :placeholder=text />
      </div>
</template>
<style scoped>
.serch {
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 22px;
  width: 102px;
  
}
.serch__input {
  height: 16px;
  width: 250px;
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #0f303f;
  background: transparent;
  outline: none;
  padding: 0;
  border-radius: 0;
  font-size: 14px;
font-family: 'Avenir';
  color: #0f303f;
  
  
}
.serch__text {
  font-family: 'Avenir';
  color: #0f303f;
}
.serch__input::placeholder{
    font-family: 'Avenir';
    color: #0f303f;
  
}

</style>