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

<style scoped></style>
