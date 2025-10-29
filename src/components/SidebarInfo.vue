<script setup>
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
  Парфюмерия: 'Sneakers',
  Макияж: 'Shoes',
  'Все товары': 'Bag',
  'Спортивные товары': 'Sport',
  'Бытовая техника': 'Texnic',
  Электроника: 'Electronic'
}

const getRouteName = (category) => {
  return categoryToRouteMap[category] || 'Main'
}

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/\s+/g, '-')
}
</script>
<template>
  <li>
    <RouterLink
      :to="{
        name: getRouteName(info),
        params: { categoryName: toKebabCase(info) }
      }"
      class="category__link"
    >
      {{ info }}
    </RouterLink>
  </li>
</template>
<style scoped>
.svg {
  padding-left: 200px;
}
.category__link {
  color: #0f303f;
  text-decoration: none;
  display: block;
  padding: 5px 0;
  transition: color 0.3s;
}

.category__link:hover {
  color: rgba(0, 0, 0, 0.466);
}
</style>
