<template>
  <ProductCard :product-id="productId" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../views/ProductCard.vue'

const route = useRoute()
const productId = computed(() => route.params.id)
</script>