<script setup>
import { ref } from 'vue'
import { ButtonMenWomen, SidebarElements } from './index'

const activeCategory = ref('women')
const categories = {
  women: { text: 'ЖЕНЩИНЫ' },
  men: { text: 'МУЖЧИНЫ' }
}
const handleCategoryClick = (category) => {
  activeCategory.value = category
}
const menuItems = ref([
  {
    title: 'ОДЕЖДА',
    items: [
      { title: 'Платья юбки' },
      { title: 'Футболки и топы' },
      { title: 'Брюки и шорты' }
    ]
  },
  {
    title: 'ОБУВЬ',
    items: [{ title: 'Кеды и кроссовки' }, { title: 'Туфли' }]
  },
  { title: 'СУМКИ', items: [{ title: 'Сумки' }] }
])
const activeIndex = ref(null)

const setActiveIndex = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
<template>
  <div class="sidebar">
    <div class="btn">
      <ButtonMenWomen
        :text="categories.women.text"
        :is-active="activeCategory == 'women'"
        @click="handleCategoryClick('women')"
      ></ButtonMenWomen>
      <ButtonMenWomen
        :text="categories.men.text"
        :is-active="activeCategory == 'men'"
        @click="handleCategoryClick('men')"
      ></ButtonMenWomen>
    </div>
    <div class="menu">
      <ul class="nav-list">
        <SidebarElements
          v-for="(item, index) in menuItems"
          :key="index"
          :info="item.title"
          :items="item.items"
          :is-open="activeIndex === index"
          @toggle="setActiveIndex(index)"
        >
        </SidebarElements>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.menu {
  position: sticky;
}
.menu ul {
  list-style: none;
  padding: 0;
}
.menu ul li a {
  color: #0f303f;
}

.nav-list {
  font-size: 14px;
  position: sticky;
  text-align: left;
  display: contents;
  text-align: row;
  gap: 200px;
}

.btn {
  display: flex;
  align-items: row;
  gap: 15px;
  justify-content: left;
  font-size: 14px;
  padding-top: 2px;
  margin-left: 7px;
}
.sidebar {
  width: 220px;
  height: 462px;
  background-color: #eae9e8;

  margin-left: 50px;
}
</style>
