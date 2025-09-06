<script setup>
import { Main, Title } from './components'
import LoyoutHeader from './layouts/LoyoutHeader.vue'
</script>

<template>
  <LoyoutHeader>
    <div class="app">
      <Title
        class="title-content"
        text="КОФТЫ И ПИДЖАКИ"
        color="dark-blue"
        style="style1"
        size="size25"
      ></Title>
      <Main class="main-content"></Main>
    </div>
  </LoyoutHeader>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  background-color: #eae9e8;
}
</style>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.title-content {
  align-self: flex-start;
  padding-left: 230px;
}
</style>
