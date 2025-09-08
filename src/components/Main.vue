<script setup>
import { computed, ref } from 'vue'
import { CardItem } from './index.js'
import { products, containers } from '../mock-api/product.js'

const calculateDiscountedPrice = (product) => {
  if (product.interest > 0) {
    const discount = product.originalPrice * (product.interest / 100)
    return Math.round(product.originalPrice - discount)
  }
  return product.originalPrice
}

const formatPrice = (price) => {
  return `${price} руб`
}
const likeProducts = ref({})

const toggleLike = (productId) => {
  likeProducts.value[productId] = !likeProducts.value[productId]
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
      class="conteiner-next"
    >
      <CardItem
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
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.conteiner-next {
  height: 325px;
  width: 840px;
  border: 1px;
  background-color: #eae9e8;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 130px;
  flex-wrap: wrap;
}

.container {
  flex-direction: column;
  gap: 30px;
  display: flex;
  margin-bottom: 200px;
}
</style>
