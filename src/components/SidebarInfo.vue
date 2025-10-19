<script setup>
import { ref } from 'vue'
const props = defineProps({
  info: {
    type: String,
    required: true
  }
})
const categoryToRouteMap = {
  'Платья юбки': 'Main',
  'Футболки и топы': 'Tshirt',
  'Брюки и шорты': 'Trousers',
  'Кеды и кроссовки': 'Sneaker',
  Туфли: 'Shoes',
  Сумки: 'Bag'
}

const getRouteName = (category) => {
  return categoryToRouteMap[category] || 'Main'
}

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/\s+/g, '-')
}
</script>
<template>
  <li class="li">
    <RouterLink
      :to="{
        name: getRouteName(info),
        params: { categoryName: toKebabCase(info) }
      }"
      class="category-link"
    >
      {{ info }}
    </RouterLink>
  </li>
</template>
<style scoped>
.svg {
  padding-left: 200px;
}
.a1 {
  color: #0f303f;
  margin-bottom: 10px;
  position: absolute;
  font-size: 16px;
}
.category-link {
  color: #0f303f;
  text-decoration: none;
  display: block;
  padding: 5px 0;
  transition: color 0.3s;
}

.category-link:hover {
  color: rgba(0, 0, 0, 0.466);
}
</style>
