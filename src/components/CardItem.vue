<script setup >
import { computed } from 'vue'
import { Svg } from './index'

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
    type: Number,
    default: 0
  },
  originalPrice: {
    type: Number,
    default: 0
  },
  categories: {
    type: [String, Array],
    default: ''
  },
  isLiked: {
    type: Boolean,
    default: false
  },
  interest: {
    type: [Number],
    default: 0
  },
  productId: {
    type: [String, Number],
    required: true
  }
})

const emit = defineEmits(['toggle-like'])

const toggleLike = () => {
  emit('toggle-like', props.productId)
}

const hasDiscounter = computed(() => {
  const discount = Number(props.interest)
  return !isNaN(discount) && discount > 0
})

const formattedPrice = computed(() => {
  return `${props.price} руб`
})

const formattedOriginalPrice = computed(() => {
  return `${props.originalPrice} руб`
})

const categoriesString = computed(() => {
  if (Array.isArray(props.categories)) {
    return props.categories.join(', ')
  }
  return props.categories
})
</script>

<template>
  <div class="product">
    <RouterLink :to="`/product/${productId}`">
      <div
        class="product__image"
        :style="{ backgroundImage: image ? `url(${image})` : 'none' }"
      ></div>
    </RouterLink>
  
    <div v-if="hasDiscounter" class="product__sale">
      <p class="product__sale--text">{{ Math.round(interest) }}%</p>
    </div>
    <button class="button__like" @click="toggleLike">
      <Svg
        name="heart"
        :size="16"
        :color="isLiked ? '#E64926' : '#0f303f'"
        :stroke-width="0.4"
      ></Svg>
    </button>
    <div class="product-info">
      <p class="product-info__name">{{ nameProduct }}</p>
      <p class="product-info__category">{{ categoriesString }}</p>
      <div class="product-info__price">
        <p class="product-info__price--original" v-if="hasDiscounter">
          {{ formattedOriginalPrice }}
        </p>
        <p  :class="{ 'product-info__price--discount': hasDiscounter }">
          {{ formattedPrice }}
        </p>
      </div>
    </div>
  </div>
  
</template>
<style scoped>
.product {
  position: relative;
}
.product__image {
  height: 325px;
  width: 270px;
  border-radius: 1px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.product-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  background-color: #eae9e8;
}
.product-info__name{
  font-weight: bold;
  margin-bottom: 5px;
  color: #0f303f;
  font-size: 18px;
}

.product-info__category {
  color: #0f303f;
  margin-bottom: 5px;
  font-size: 16px;
}
.product-info__price--discount{
  font-weight: bold;
  color: #e64926 !important;
  font-size: 14px;
  border: 2px #e64926;
}

.button__like{
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 40px;
  position: absolute;
  top: 270px;
  right: 15px;
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 0;
}

.product__sale {
  width: 45px;
  height: 45px;
  background-color: #e64926;
  border-radius: 40px;
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product__sale--text {
  color: #ffffff;
  font-size: 14px;
}
.heart-icon {
  margin: 0;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  outline: none;
}
.heart-filled {
  transition: all 0.3s ease;
}

.like-btn:active {
  transform: scale(0.95);
}
.product-info__price {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
.product-info__price--original {
  color: #888;
  font-size: 14px;
  text-decoration: line-through;
}
</style>
