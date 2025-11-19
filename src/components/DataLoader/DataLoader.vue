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
    console.log('fetchData')
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
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <slot v-else />
</template>