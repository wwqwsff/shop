<script setup>
import { computed, ref } from 'vue'
import CardItem from '../components/CardItem.vue'
import { products, containers } from '../mock-api/product.ts'

const likeProducts = ref({})

const calculateDiscountedPrice = (product) => {
  if (product.interest > 0) {
    const discount = product.originalPrice * (product.interest / 100)
    return Math.round(product.originalPrice - discount)
  }
  return product.originalPrice
}

const toggleLike = (productId) => {
  likeProducts.value[productId] = !likeProducts.value[productId]
}

const isProductLiked = (productId) => {
  return !!likeProducts.value[productId]
}

const productContainers = computed(() => {
  return containers.map((container) =>
    container.map((productId) => {
      const product = products[productId]
      return {
        id: productId,
        ...product,
        price: calculateDiscountedPrice(product)
      }
    })
  )
})
</script>

<template>
  <div class="base">
    <h1 class="title">БРЮКИ И ШОРТЫ</h1>
    <div class="container">
      <div
        v-for="(productGroup, index) in productContainers"
        :key="index"
        class="conteiner-next"
      >
        <CardItem
          v-for="product in productGroup"
          :key="product.id"
          :image="product.image"
          :nameProduct="product.nameProduct"
          :price="product.price"
          :originalPrice="product.originalPrice"
          :categories="product.categories"
          :interest="product.interest"
          :productId="product.id"
          :isLiked="isProductLiked(product.id)"
          @toggle-like="toggleLike"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.title {
  font-family: 'Avenir';
  font-size: 25px;
  position: sticky;
  white-space: nowrap;
  color: #0f303f;
}
.conteiner-next {
  height: 325px;
  width: 840px;
  border: 1px;
  background-color: #eae9e8;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 150px;
  flex-wrap: wrap;
}

.container {
  flex-direction: column;
  gap: 30px;
  display: flex;
  margin-bottom: 200px;
}
.base {
  margin-left: 50px;
}
</style>
