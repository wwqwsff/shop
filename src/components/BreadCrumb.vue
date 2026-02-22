<template>
  <nav aria-label="breadcrumb" class="breadcrumb-nav">
    <ol class="breadcrumb">
      <li 
        v-for="(item, index) in breadcrumbItems" 
        :key="index" 
        class="breadcrumb-item"
      >
        <template v-if="item.url && index !== breadcrumbItems.length - 1">
          <router-link :to="item.url">{{ item.label }}</router-link>
        </template>
        <template v-else>
          <span>{{ item.label }}</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbItems = computed(() => {
  const items = route.matched.map(r => ({
    label: r.meta?.breadcrumb || r.name,
    url: r.path
  }));

  // Последний элемент — текущая страница, без ссылки
  if (items.length) items[items.length - 1].url = undefined;

  return items;
});
</script>

<style scoped>
.breadcrumb {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
}

.breadcrumb-item::after {
  content: ">";
  margin-left: 0.5rem;
}

.breadcrumb-item:last-child::after {
  content: "";
}

.breadcrumb-item a {
  text-decoration: none;
  color: #0f303f;
}

.breadcrumb-item span {
  color: #6c757d;
}
</style>