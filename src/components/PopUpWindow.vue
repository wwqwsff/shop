<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 14
  },
  color:{
    type:String,
    default: ''
  },
  colorBackground:{
    type:String,
    default: ''
  }

})
const emit = defineEmits(['close'])


const closePopup = () => {
  emit('close')
}


import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.classList.add('popup-open')
})

onUnmounted(() => {
  document.body.classList.remove('popup-open')
})
</script>


 <template>
  <div class="popup-overlay" @click="closePopup">
    <div class="popup-container" :class="size" @click.stop>
      <div class="popup-header">
        <h2 class="popup-title">{{ title }}</h2>
        <button class="popup-close" @click="closePopup">×</button>
      </div>
      
      <div class="popup-content">
        <div v-if="text.includes('\n')" class="formatted-text">
          <p v-for="(paragraph, index) in text.split('\n').filter(p => p.trim())" 
             :key="index"
             class="text-paragraph">
            {{ paragraph }}
          </p>
        </div>
        <div v-else class="simple-text">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>
 <style scoped>
  .popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}


.popup-container {
  background-color: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}


.pay {
  width: 520px;
  height: 570px;
}

.return {
  width: 520px;
  height: 735px;
}


.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #E8E8E8;
}

.popup-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #0F303F;
}

.popup-close {
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: #B7C1C5;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-close:hover {
  color: #0F303F;
}


.popup-content {
  padding: 24px;
}
.defelt{
    width: 520px;
    height: 570px;
    background-color: #FFFFFF;
    margin: auto;
    
}
.pay{
    width: 520px;
    height: 570px;
    
}
.return{
    width: 520px;
    height: 735px;
    
}
.grey{
   color: #B7C1C5 !important;
}
.dark-grey{
     color: #0F303F !important;
}
 </style>