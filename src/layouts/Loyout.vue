<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <div class="loyout">
    <Header class="header"></Header>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style>
.header {
  margin-bottom: 70px;
 
}
body {
  padding: 0;
  min-height: 100%;
  min-width: 100%;
  background-color: #eae9e8;
  position: relative;
}

</style>
<style scoped>
.loyout {
  display: inline-block;
  flex-direction: column;
  text-align: center;
}

</style>
