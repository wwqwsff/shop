<script setup>
import { computed,ref } from 'vue'
import { MainContent } from './index.js'
import { products, containers } from '../mock-api/product.js';

const calculateDiscountedPrice = (product) => {
  if (product.interest > 0) {
    const discount = product.originalPrice * (product.interest / 100);
    return Math.round(product.originalPrice - discount);
  }
  return product.originalPrice;
}

const formatPrice = (price) => {
  return `${price} руб`;
}
const likeProducts =ref({})

const toggleLike = (productId)=>{
  likeProducts.value[productId] =!likeProducts.value[productId]
}
const isProductLiked = (productId) => {
  return !!likeProducts.value[productId]
}
</script>

<template>
  <div class="container">
    <div 
      v-for="(productIds, index) in containers"
      :key="index"
      class="conteiner-1"
    >
      <MainContent 
        v-for="productId in productIds"
        :key="productId"
        :image="products[productId].image"
        :nameProduct="products[productId].nameProduct"
        :price="formatPrice(calculateDiscountedPrice(products[productId]))"
        :originalPrice="formatPrice(products[productId].originalPrice)"
        :categories="products[productId].categories"
        :isLiked="isProductLiked(productId)"
        :interest="products[productId].interest"
        @toggle-like="toggleLike(productId)"
      />
    </div>
  </div>
</template>
<style>

</style>
<style scoped>
.conteiner-1 {
  height: 325px;
  width: 840px;
  border: 1px;
  background-color:#EAE9E8;
  display: flex;
  align-items: row;
  gap: 15px;
  margin-top: 180px;
}

.container {
  flex-direction: column;
  gap: 10px;
  display: flex;
}
</style>