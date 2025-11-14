<script setup>
import { computed, ref, onMounted } from 'vue'
import { Title , BaseButton} from './index.js'




</script>

<template>
  <div class="base">
    
      <div class="base__info">
      <Title class="base--text"
      text="БРЕНД"
      size="size25"
      color="dark-blue"/>
      <Title class="base--text"
      text="DENA"
      size="size40"
      color="dark-blue"/>
      <!-- <base-button class="base--text"
      text="Смотреть коллекцию"
      size="normall-size"
      color="orang"/> -->
    </div>
    <div class="base--image"></div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
.base__info{
   
  
}
.base {
  height: 585px;
  width: 1440px;
  display: flex;
   align-items: center;
  justify-content: space-between;
 
}
.base--image{
  width: 941px;
  height: 585px;
  background: url('../assets/home4.png') no-repeat center / cover;
  margin-left: 40%;
}
</style>
