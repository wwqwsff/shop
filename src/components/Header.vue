<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton, Svg } from './index'

type Category = 'women' | 'men'
type Language = 'ru'| 'en'

 
const activeCategory = ref<Category>('women')
const activeLanguage = ref<Language>('ru')
const languages = {
  ru: { text: 'RU' },
  en: { text: 'EN' }
}

const categories = {
  women: { text: 'ЖЕНЩИНЫ' },
  men: { text: 'МУЖЧИНЫ' }
}
const icons = {
  1: { name: 'bag', size: '16', color: '#0F303F' },
  2: { name: 'person', size: '16', color: '#0F303F' },
  3: { name: 'heart', size: '16', color: '#0F303F' }
}
const handleCategoryClick = (category: Category) => {
  activeCategory.value = category
}
const handleLanguageClick = (language: Language) => {
  activeLanguage.value = language
}
</script>

<template>
  
  <div class="header">
    <div class="name">
      <p class="name__text">A L L E G R I A</p>
    </div>
    <div class="button">
      <RouterLink to="/category/dress" class="btn--router">
      <BaseButton
        :text="categories.women.text"
        :is-active="activeCategory === 'women'"
        @click="handleCategoryClick('women')"
        
      />
      </RouterLink>
      <RouterLink to="/category/mentshirt"  class="btn--router">
      <BaseButton
        :text="categories.men.text"
        :is-active="activeCategory === 'men'"
        @click="handleCategoryClick('men')"
      />
      </RouterLink>

      <div class="serch">
        <p class="serch__text">ПОИСК</p>
        <input type="text" class="serch__input" placeholder="" />
      </div>

      <BaseButton
        v-for="(language, key) in languages"
        :key="key"
        :text="language.text"
        :is-active-orange="activeLanguage === key"
        @click="handleLanguageClick(key)"
        
      />
      <div class="icon">
        <Svg
          v-for="(icon, key) in icons"
          :key="key"
          :name="icon.name"
          :color="icon.color"
          :size="icon.size"
        ></Svg>
      </div>
    </div>
  </div>
  <div class="header__down">
    <RouterLink to="/" class="btn--router">
    <BaseButton
    class="header__down--info" 
    text="Главная"
    size="small-size"/></RouterLink>
    <BaseButton
    class="header__down--info" 
    text="Женщины"
    size="small-size"/>
    <BaseButton
    class="header__down--info" 
    text="Одежда"
    size="small-size"/>
    <BaseButton
    class="header__down--info-grey" 
    text="Кофты"
    size="small-size"
    color="grey"
    />
  </div>
  
</template>

<style scoped>

.header {
  width: 100%;
  height: 43px;
  display: flex;
  align-items: row;
  gap: 400px;
  margin-top: 1%;
  justify-content: center;
  
 
}
.btn--router{
  text-decoration: none;
}
.name {
  height: 100%;
  display: flex;

  font-family: 'Regular 90';
}
.button {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.name__text {
  color: #0f303f;
  font-size: 18px;
  width: 100%;
  margin-left: 50px;
  white-space: nowrap;
}
.serch__text {
  font-family: 'Avenir';
  color: #0f303f;
  font-size: 16px;
  margin-top: 20px;
}
.serch {
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 22px;
  width: 102px;
  margin-right: 200px;
}
.serch__input {
  height: 16px;
  width: 150px;
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid #0f303f;
  background: transparent;
  outline: none;
  padding: 0;
  border-radius: 0;
}
.icon {
  margin-top: 23px;
  display: flex;
  flex-direction: row;
  gap: 3px;
  margin-left: 50px;
}
.header__down{
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: -70px;
  margin-bottom: 50px;
  margin-left: 50px;
}
.header__down--info::after{
  
  content: '';
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color:#0f303f ;
  border-radius: 50%;
  
  margin: 5px;
  
}
.header__down--info-grey::after{
  content: '';
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: #B7C1C5;
  border-radius: 50%;
  
  margin: 5px;
}
</style>
