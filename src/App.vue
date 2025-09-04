<script setup>
import { Main, Header, Title } from './components'
</script>

<template>
  <div class="app">
    <Header class="header-content"></Header>
    <Title
      class="title-content"
      text="КОФТЫ И ПИДЖАКИ"
      color="dark-blue"
      style="style1"
      size="size25"
    ></Title>
    <Main class="main-content"></Main>
  </div>
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
