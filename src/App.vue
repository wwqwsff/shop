<script setup>
import { Main, Title } from './components'
import Loyout from './layouts/Loyout.vue'
</script>

<template>
  <Loyout>
    <div class="app">
      <Title
        class="title-content"
        text="КОФТЫ И ПИДЖАКИ"
        color="dark-blue"
        style="style1"
        size="size25"
        left="marginl"
      ></Title>
      <Main></Main>
    </div>
  </Loyout>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-content {
  display: flex;
  justify-content: left;
}
</style>
