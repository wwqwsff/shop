<script setup lang="ts">
import { ref, computed } from 'vue'
import { BaseButton, SidebarElements } from './index'

type Category = 'women'| 'men'
interface Item {
  title: string
}

interface MenuItem {
  title: string
  items: Item[]
}

const activeCategory = ref<Category>('women')
const categories = {
  women: { text: 'ЖЕНЩИНЫ' },
  men: { text: 'МУЖЧИНЫ' }
}


const allMenuItems: Record<Category,MenuItem[]> = {
  women: [
    {
      title: 'ОДЕЖДА',
      items: [
        { title: 'Платья юбки' },
        { title: 'Футболки и топы' },
        { title: 'Брюки и шорты' }
      ]
    },
    {
      title: 'КОСМЕТИКА',
      items: [{ title: 'Парфюмерия' }, { title: 'Макияж' }]
    },
    { title: 'ДЕКОР ДЛЯ ДОМА', items: [{ title: 'Все товары' }] },
    {
      title: 'УКРАШЕНИЯ',
      items: [{ title: 'Украшения' }]
    }
  ],
  men: [
    {
      title: 'МУЖЧИНАМ',
      items: [
        { title: 'Спортивные товары' },
        { title: 'Бытовая техника' },
        { title: 'Электроника' }
      ]
    }
  ]
}

const activeIndex = ref<number|null>(null)

const handleCategoryClick = (category:Category) => {
  activeCategory.value = category
  activeIndex.value = null 
}

const setActiveIndex = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}


const currentMenuItems = computed(() => {
  return allMenuItems[activeCategory.value]
})
</script>

<template>
  <div class="sidebar">
    <div class="button">
      <BaseButton
        :text="categories.women.text"
        :is-active="activeCategory === 'women'"
        @click="handleCategoryClick('women')"
      />
      <BaseButton
        :text="categories.men.text"
        :is-active="activeCategory === 'men'"
        @click="handleCategoryClick('men')"
      />
    </div>
    <div class="menu">
      <ul class="menu__nav-list">
        <SidebarElements
          v-for="(item, index) in currentMenuItems"
          :key="index"
          :info="item.title"
          :items="item.items"
          :is-open="activeIndex === index"
          @toggle="setActiveIndex(index)"
        />
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

.menu__nav-list {
  font-size: 14px;
  position: sticky;
  text-align: left;
  display: contents;
  text-align: row;
  gap: 200px;
}

.button {
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
