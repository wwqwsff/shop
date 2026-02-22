<script setup>
const props = defineProps({
  info: {
    type: String,
    required: true
  },
  routeKey: {  
    type: String,
    required: true
  }
})

const categoryToRouteMap = {
  dresses_skirts: 'Dress',
  tshirts_tops: 'Tshirt',
  pants_shorts: 'Trousers',
  perfume: 'Parfum',
  makeup: 'Skincare',
  all_products: 'HomeDecoration',
  men_shirts: 'MenTshirt',
  men_watches: 'MenWatch',
  sunglasses: 'SunGlasses'
}
const getRouteName = (category) => {
  return categoryToRouteMap[category] || 'Main'
}


</script>

<template>
  <li>
    <RouterLink
      :to="{ name: getRouteName(routeKey) }"
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
