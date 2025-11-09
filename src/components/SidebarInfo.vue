<script setup>
const props = defineProps({
  info: {
    type: String,
    required: true
  }
})

const categoryToRouteMap = {
  'Платья юбки': 'Dress',
  'Футболки и топы': 'Tshirt',
  'Брюки и шорты': 'Trousers',
  'Парфюмерия': 'Parfum',
  'Макияж': 'Skincare',
  'Все товары': 'HomeDecoration',
  'Мужские рубашки': 'MenTshirt',
  'Мужские часы': 'MenWatch',
  'Солнцезащитные очки': 'SunGlasses'
}

const getRouteName = (category) => {
  return categoryToRouteMap[category] || 'Main'
}


</script>

<template>
  <li>
    <RouterLink
      :to="{ name: getRouteName(info) }"
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
