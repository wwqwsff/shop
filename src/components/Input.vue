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
  },
    placeholder: { 
    type: String,
    default: ''
  },
    modelValue: { 
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  hasError: {
    type: Boolean,
    default: false
  }

})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>
<template>
  <div class="serch" :class="{ 'error': hasError }">
        <p class="serch__text">{{ text1 }}</p>
        <input 
          :type="type" 
          class="serch__input" 
          :placeholder="placeholder" 
          :value="modelValue"
          @input="updateValue"
        />
      </div>
</template>
<style scoped>
.serch__input:hover{
  border-bottom: 1.5px solid #0f303f;
  
}
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
.error .serch__input {
  border-bottom-color: #ff4444;
}
</style>