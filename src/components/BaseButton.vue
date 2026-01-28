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
  },
  colorBackground:{
    type:String,
    default: ''
  },
  isActiveBorder:{
    type: Boolean,
    default:false
  },

})
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>
<template>
  <button
    class="button"
    :class="[{ 'button--active': isActive, 'button--active--orange':isActiveOrange,'btn--active-border':isActiveBorder}, size, color,colorBackground]"
    
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
.btn--active-border{
  border: 3px solid #636363 !important;
  
}
.button--addCard{
  width:280px ;
  height: 50px;
  border: 1px solid #0F303F;
  margin-top: 0px !important
}
.button--rectangle{
  width: 20px;
  height: 20px;
  border-radius: 26px;
  border: 1px solid #EAE9E8;
}
.button--rectangle:hover{
  border: 3px solid #EAE9E8;
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
.normal-size{
  font-size: 16px !important;
}
.normal-size:hover{
  color: #555555 !important;
}
.small-size:hover{
  color: #9da5a8 !important;
}

.grey{
  color: #B7C1C5 !important;
}

.withe{
  color: aliceblue !important;
  text-align: center !important;
}
.greylight{
  background-color: #858585;
}
.beige{
  background-color:rgb(196, 155, 155)!important;
}
.blue{
  background-color:#4f60b4 !important;
}
.oranges {
  background-color:#a05949 !important;
}
.orang {
  color:#E64926 !important;
}
.orang:hover{
  color: #831800 !important;
}
.black {
  background-color: #000000!important;
}
.dark-blue{
  background-color: #0F303F !important;
}
.normall-size{
  font-size: 25px !important;
  font-family: 'Cormorant Garamond';

}
.dilivery{
  width: 250px;
  height: 50px;
  text-align: center;
  
}
.dilivery:hover{
  width: 250px;
  height: 50px;
  text-align: center;
  background-color: #364d58;
  
}

</style>
