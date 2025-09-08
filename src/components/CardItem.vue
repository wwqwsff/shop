<script setup>
import { ref, computed } from 'vue'
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
    type: String,
    default: '0 uan'
  },
  originalPrice: {
    type: String,
    default: '0 uan'
  },
  categories: {
    type: String,
    default: '0 uan'
  },
  isLiked: {
    type: Boolean,
    default: false
  },
  interest: {
    type: String,
    default: 0
  }
})
const emit = defineEmits(['toggle-like'])
const toggleLike = () => {
  emit('toggle-like')
}
const hasDiscounter = computed(() => props.interest > 0)
</script>

<template>
  <div class="product">
    <div
      class="conteiner-1"
      :style="{ backgroundImage: image ? `url(${image})` : 'none' }"
    ></div>
    <div v-if="hasDiscounter" class="sale">
      <p class="interest-p">{{ interest }}%</p>
    </div>
    <button class="like-btn" @click="toggleLike">
      <Svg
        class="svg"
        name="heart"
        :size="16"
        :color="isLiked ? '#E64926' : '#0f303f'"
        :stroke-width="0.4"
      ></Svg>
    </button>
    <div class="container-1-info-text">
      <p class="conteiner-name">{{ nameProduct }}</p>
      <p class="conteiner-categories">{{ categories }}</p>
      <div class="price-container">
        <p class="original-price" v-if="hasDiscounter">{{ originalPrice }}</p>
        <p class="conteiner-price" :class="{ 'discount-prise': hasDiscounter }">
          {{ price }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
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
  padding: 5px;
  font-family: 'Jost', sans-serif;
  background-color: #eae9e8;
}
.conteiner-name {
  font-weight: bold;
  margin-bottom: 5px;
  color: #0f303f;
  font-size: 18px;
}

.conteiner-categories {
  color: #0f303f;
  margin-bottom: 5px;
  font-size: 16px;
}
.discount-prise {
  font-weight: bold;
  color: #e64926 !important;
  font-size: 14px;
  border: 2px #e64926;
}
.conteiner-price {
  font-weight: bold;
  color: #0f303f;
  font-size: 14px;
  border: 2px black;
}
.like-btn {
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

.sale {
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
.interest-p {
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
