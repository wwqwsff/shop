<script setup>
import { RouterView } from 'vue-router'
import Loyout from './layouts/Loyout.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Loyout class="layout"> </Loyout>
  

  <div class="app">
    <RouterView class="content"></RouterView>
  </div>
</template>

<style scoped>
.app {
  
  justify-content: center;
  
 
}

</style>
