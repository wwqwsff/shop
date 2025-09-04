<script setup>
import { ref } from 'vue'
import { ButtonMenWomen, ButtonLanguage, Svg } from './index'

const activeCategory = ref('women')
const activeLanguage = ref('ru')
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
const handleCategoryClick = (category) => {
  activeCategory.value = category
}
const handleLanguageClick = (language) => {
  activeLanguage.value = language
}
</script>

<template>
  <div class="header">
    <div class="name">
      <p class="name-t">A L L E G R I A</p>
    </div>
    <div class="btn-header">
      <ButtonMenWomen
        :text="categories.women.text"
        :is-active="activeCategory === 'women'"
        @click="handleCategoryClick('women')"
      />
      <ButtonMenWomen
        :text="categories.men.text"
        :is-active="activeCategory === 'men'"
        @click="handleCategoryClick('men')"
      />

      <div class="serch">
        <p class="serch-t">ПОИСК</p>
        <input type="text" class="input-s" placeholder="" />
      </div>

      <ButtonLanguage
        v-for="(language, key) in languages"
        :key="key"
        :text="language.text"
        :is-active="activeLanguage === key"
        @click="handleLanguageClick(key)"
        class="btn-lang"
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
</template>

<style scoped>
.header {
  width: 1440px;
  height: 43px;
  display: flex;
  align-items: row;
  gap: 400px;
}
.name {
  width: 129px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: 'Regular 90';
}
.btn-header {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.name-t {
  color: #0f303f;
  font-size: 18px;
}
.serch-t {
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
.input-s {
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
  gap: 15px;
  margin-left: 50px;
}
</style>
