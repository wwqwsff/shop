<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <div class="loyout">
    <Header></Header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #eae9e8;
}
</style>
