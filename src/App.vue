<script setup>
import { RouterView } from 'vue-router'
import Loyout from './layouts/Loyout.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Loyout class="layout"> </Loyout>
  <Sidebar class="sidebar"></Sidebar>

  <div class="app">
    <RouterView class="content"></RouterView>
  </div>
</template>

<style scoped>
.app {
  margin-left: 200px;
  justify-content: center;
  margin-top: -495px;
  padding-left: 130px;
}
</style>
