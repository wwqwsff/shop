<script setup>
import { Title,Input ,BaseButton} from './index.ts';
const infotexts = {
   name:{title: 'REPLAY',size:'size18'},
    sname:{title:'Classic Shoes',size:'size16'},
    price:{title: '4565'},
    
}

</script>
<template>
    <div class="container">
        <div class="image"></div>
        <div class="info">
            <Title v-for="(infoText, key) in infotexts"
            :key="key"
            :text="infoText.title"
            :size="infoText.size"></Title>
        </div>
    </div>
    <hr class="hr--one">
</template>
<style scoped>
.container{
    display: flex;
    align-items: row;
    margin-bottom: 40px;
    
}
.image{
    height: 170px;
    width: 140px;
    background-color: aquamarine;
    margin-right: 50px;
}
.info{
    display:  flex;
    flex-direction: column;
    
}
.hr--one {
    background-color: rgba(128, 128, 128, 0.3);
    height: 1px;
    border: none;
    margin-bottom: 20px;
    width: 720px;
}

</style>