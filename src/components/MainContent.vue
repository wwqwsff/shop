<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  nameProduct: {
    type: String,
    default: 'Name product'
  },
  price: {
    type: String,
    default: '0 uan'
  },
  originalPrice:{
    type:String,
    default: '0 uan'
  },
  categories: {
    type: String,
    default: '0 uan'
  },
  isLiked:{
    type:Boolean,
    default:false
  },
  interest:{
    type: String,
    default: 0
  }
})
 const emit = defineEmits(['toggle-like'])
 const toggleLike = ()=>{
  emit('toggle-like')
 }
const hasDiscounter = computed(()=>props.interest>0)
</script>

<template>
    <div class="product">
      <div
        class="conteiner-1"
        :style="{ backgroundImage: image ? `url(${image})` : 'none' }"
      ></div>
      <div v-if='hasDiscounter'class="sale"><p class="interest-p">{{ interest }}%</p></div>
      <button class="like-btn" @click="toggleLike">
        <svg class="heart-icon" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 15.5L8.125 14.25C3.25 10 0 7.125 0 3.625C0 0.75 2.25 0 3.875 0C5.5 0 7 0.75 9.5 2.5C12 0.75 13.5 0 15.125 0C16.75 0 19 0.75 19 3.625C19 7.125 15.75 10 10.875 14.25L9.5 15.5Z" 
          stroke="#0F303F" 
          :stroke="isLiked? '#E64926': '#0F303F'"
          :fill="isLiked ? '#E64926' : 'none'"
          stroke-width="1"/>
        </svg>
      </button>
      <div class="container-1-info-text">
        <p class="conteiner-name">{{ nameProduct }}</p>
        <p class="conteiner-categories">{{ categories }}</p>
        <div class="price-container">
          <p class="original-price" v-if="hasDiscounter">{{ originalPrice }}</p>
          <p class="conteiner-price" :class="{'discount-prise':hasDiscounter}">{{ price }}</p>
          
        </div>
      </div>
      
  </div>
</template>

<style scoped>
.product{
  position: relative;
}
.conteiner-1 {
  
  height: 325px;
  width: 270px;
  border-radius: 1px;
  background-size: cover;
background-position: center;
  background-repeat: no-repeat;
}
.container-1-info-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px ;
  font-family: 'Jost', sans-serif;
  
}
.conteiner-name {
  font-weight: bold;
  margin-bottom: 5px;
  color: #0F303F;
  font-size: 18px;
}

.conteiner-categories {
  color: #0F303F;
  margin-bottom: 5px;
  font-size: 16px;
}
.discount-prise{
  font-weight: bold;
  color: #E64926!important;
  font-size: 14px;
  border: 2px #E64926;
}
.conteiner-price {
  font-weight: bold;
  color: #0F303F;
  font-size: 14px;
  border: 2px black;
}
.like-btn{
  width:45px ;
  height:45px ;
  background-color: #FFFFFF;
  border-radius: 40px;
  position: absolute;
  top:270px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center
  
}
.sale{
  width:45px ;
  height:45px ;
   background-color:#E64926;
  border-radius: 40px;
  position: absolute;
  top:10px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center
}
.interest-p{
  color: #FFFFFF;
  font-size: 14px;
}
.heart-icon{
  margin:0;
   width: 20px;
  height: 20px;
  flex-shrink: 0;
  
}
.heart-filled {
  transition: all 0.3s ease;
}

.like-btn:active {
  transform: scale(0.95);
}
.price-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
.original-price {
  color: #888;
  font-size: 14px;
  text-decoration: line-through;
}
</style>
