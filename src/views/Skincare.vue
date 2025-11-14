<script setup>
import { computed, ref, onMounted } from 'vue'
import { CardItem , Sidebar} from './index.ts'
import api from '../api/index.ts'

const products = ref([])
const loading = ref(true)
const error = ref(null)
const likeProducts = ref({})

const fetchProducts = async () => {
  try {
    loading.value = true
    const response = await api.getProductsByCategory('skincare', 20)
    products.value = response.products
  } catch (err) {
    error.value = 'Не удалось загрузить товары'
    console.error('Ошибка загрузи товаров:', err)
  } finally {
    loading.value = false
  }
}

const calculateDiscountedPrice = (product) => {
  if (product.discountPercentage > 0) {
    const discount = product.price * (product.discountPercentage / 100)
    return Math.round(product.price - discount)
  }
  return product.price
}

const toggleLike = (productId) => {
  likeProducts.value[productId] = !likeProducts.value[productId]
}

const isProductLiked = (productId) => {
  return !!likeProducts.value[productId]
}

const productContainers = computed(() => {
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
    <h1 class="title">МАКИЯЖ</h1>
    <div class="base__content">
    <Sidebar class="sidebar"></Sidebar>
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
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.base__content{
   display: flex;
  flex-direction: row;
  gap: 170px;
  width: 100%;
  height: 100%;
}
.sidebar{
  position: sticky;
}
.title {
  font-family: 'Avenir';
  font-size: 25px;
  position: sticky;
  white-space: nowrap;
  color: #0f303f;
  padding-left:440px ;
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
