<script setup>
import { computed, ref, watch } from 'vue'
import Svg from './Svg.vue'
import SidebarInfo from './SidebarInfo.vue'

const props = defineProps({
  info: {
    type: String,
    default: ''
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    default: () => []
  },
  routerKey:{
    type: String,
    required: true
  }
  
})
const emit = defineEmits(['toggle'])
const hangleClick = () => {
  emit('toggle')
}
const currentIcon = ref('plus')
watch(
  () => props.isOpen,
  (newVal) => {
    currentIcon.value = newVal ? 'dash' : 'plus'
  }
)
</script>
<template>
  <hr class="line" />
  <li>
    <span class="text">{{ info }}</span>
    ><Svg
      class="svg"
      :size="16"
      :name="isOpen ? 'dash' : 'plus'"
      @click="hangleClick"
      :stroke-width="0.4"
    ></Svg>
  </li>
  <SidebarInfo
    v-if="isOpen"
    class="text--row"
    v-for="(item, index) in items"
    :key="index"
    :info="item.title"
    :route-key="item.routeKey"
  />
</template>
<style scoped>
.text--row {
  display: flex;
  align-items: row;
  gap: 5px;
  height: 20px;
}
.line {
  width: 220px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.svg {
  padding-left: 200px;
}
.text{
  color: #0f303f;
  margin-bottom: 10px;
  position: absolute;
  font-size: 16px;
  font-family: 'Avenir';
  text-decoration: none;
}
</style>
