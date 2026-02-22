<script setup lang="ts">
import { onMounted, ref } from 'vue'

type LoaderFn = () => Promise<unknown> | unknown

const props = defineProps<{
  loadFn: LoaderFn
}>()

const loading = ref(true)
const error = ref<string | null>(null)

const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const loader = props.loadFn
    await loader()
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})

defineExpose({ fetchData, loading, error })
</script>

<template>
  <div v-if="loading" class="loader-container">

    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4" />
    </svg>
  </div>

  <div v-else-if="error" class="loader-error">
    Ошибка: {{ error }}
  </div>

  <slot v-else />
</template>

<style scoped>

.loader-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 8px;
}


.spinner {
  animation: rotate 2s linear infinite;
  width: 30px;
  height: 30px;
}


.path {
  stroke: #000000;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}


@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.loader-error {
  color: red;
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>