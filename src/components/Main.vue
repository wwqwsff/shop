<script setup>
import { computed, ref, onMounted } from 'vue'
import { Title , BaseButton, Svg} from './index.js'




</script>

<template>
  <div class="base">
    
      <div class="base__info">
      <!-- <Title class="base--text"
      text="NEW ARRIVAL"
      size="size40"
      color="dark-blue"/>
      <Title class="base--text"
      text="Lorem ipsumLorem ipsumLorem ipsumLorem
       ipsumLorem ipLorem ipsumLorem ipLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip"
      size="size14"
      color="dark-blue"/> -->
      <!-- <base-button class="base--text"
      text="Смотреть коллекцию"
      size="normall-size"
      color="orang"/> -->
    </div>
    <div class="image--info">
    <div class='base--image1'>
      <div class="text__info">
      <Title class="base--text"
      text="NEW ARRIVAL"
      size="size40"
      color="white"/>
      <Title class="base--text"
      text="Lorem ipsumLorem ipsumLorem ipsumLorem
       ipsumLorem ipLorem ipsumLorem ipLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip"
      size="size14"
      color="white"/>
      </div>
    </div>
    <div class="image__two">
    <div class="base--image"/>
    </div>
 
    </div>
  </div>
  <div class="base__two">
 <div class="text__info--two">
      <Title class="base--text"
      text="O НАС"
      size="size40"
      color="white"/>
      <Title class="base--text3" 
      text="Lorem ipsumLorem ipsumLorem ipsumLorem
       ipsumLorem ipLorem ipsumLoreLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem 
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
        ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem 
      ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem "
      size="size14"
      color="white"/>
      </div>
      <div class="base__tree"/>
      

      </div>
  <div class="end">
    <div class="text__info--two">
      <Title class="base--text4"
      text="БУДЬТЕ В КУРСЕ СОБЫТИЙ"
      size="size25"
      color="dark-blue"/>
      <Title class="base--text4" 
      text="wwqwsff"
      size="size14"
      color="dark-blue">
      </Title>
       <Svg
      class="svg"
      :size="16"
      name="message"
      :stroke-width="0.4"
    ></Svg>
      <hr class="line">
      </div>
  </div>

</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
.svg{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
 margin-top: -30px;
  margin-left: 250px;
  padding-top: 3px;
}
.line{
  color:#254A5A ;
  margin-top: 3px;
  width: 150px;
  margin-left:90px ;
  
}
.image--info{
  display: flex;
  flex-direction: row;
}
.base--text4{
  text-align: center;
  
  
}
.base {
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #CEC6C4;
  
 
}
.end{
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
.base--image{
  width: 380px;
  height: 380px;
  background: url('../assets/home5.png') no-repeat center / cover;
  margin-top: 100px;
  margin-left: 100px;
  
}
.base--image1{
  width: 650px;
  height: 700px;
  background: url('../assets/8512d6c78dca8153a066e7d19afc9c2e446e2544 (1).png') no-repeat center;
  
  
}
.base__tree{
  width: 474px;
  height: 543px;
  background: url('../assets/160ef874d527ae6761ad7923f6ec512b628a9f2f (1).png') ;
  margin-left: 300px;
  margin-top: 300px;
}
.image__two{
  width: 600px;
  height: 600px;
  background-color: #FFFFFF;
  margin-left: 180px;
  margin-top: 50px;
}

.base--text{
  margin-left:50px ;
}
.base--text3{
  width: 498px;
  height: 95px;
  margin-left:50px ;
  text-align:left;
}
.text__info{
  margin-top: 400px;
}
.base__two{
   height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color:#254A5A ;
  margin-top: 100px;
}
.text__info--two{
  margin-top: 200px;
}
</style>
