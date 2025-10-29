<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { CardItem } from './index.js'
import api from '../api/index.js'

interface Product{
  id: number
  title: string
  price: number
  discountPercentage: number;
  thumbnail: string;
  category: string;
}
const products = ref<Product[]>([])
const loading = ref<boolean>(true)
const error = ref<string| null>(null)
const likeProducts = ref<LikeProducts>({})

interface LikeProducts {
  [key: string | number]: boolean
}

const fetchProducts = async ():Promise<void> => {
  try {
    loading.value = true
    const response = await api.getProductsByCategory('womens-dresses', 20)
    products.value = response.data.products as Product[]
  } catch (err) {
    error.value = 'Не удалось загрузить товары'
    console.error('Ошибка загрузи товаров:', err)
  } finally {
    loading.value = false
  }
}

const calculateDiscountedPrice = (product: Product): number => {
  if (product.discountPercentage > 0) {
    const discount = product.price * (product.discountPercentage / 100)
    return Math.round(product.price - discount)
  }
  return product.price
}

const toggleLike = (productId: string|number):void => {
  likeProducts.value[productId] = !likeProducts.value[productId]
}

const isProductLiked = (productId: string| number)=> {
  return !!likeProducts.value[productId]
}

const productContainers = computed<Product[][]>(() => {
  const containers = []
  for (let i = 0; i < products.value.length; i += 3) {
    containers.push(products.value.slice(i, i + 3))
  }
  return containers
})

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="base">
    <h1 class="title">ПЛАТЬЯ И ЮБКИ</h1>
    <div class="container">
      <div
        v-for="(productGroup, index) in productContainers"
        :key="index"
        class="conteiner-next"
      >
        <CardItem
          v-for="product in productGroup"
          :key="product.id"
          :image="product.thumbnail"
          :nameProduct="product.title"
          :price="calculateDiscountedPrice(product)"
          :originalPrice="product.price"
          :categories="product.category"
          :interest="product.discountPercentage"
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
