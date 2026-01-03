<script setup>
import { Title, BaseButton } from './index.ts'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['remove', 'update-quantity'])

const increaseQuantity = () => {
  emit('update-quantity', props.product.quantity + 1)
}

const decreaseQuantity = () => {
  if (props.product.quantity > 1) {
    emit('update-quantity', props.product.quantity - 1)
  }
}

const removeItem = () => {
  emit('remove')
}
</script>

<template>
    <div class="container">
        <div class="image">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="info">
            <Title :text="product.brand || 'Бренд'" size="size18"/>
            <Title :text="product.title" size="size16"/>
            <div class="details" v-if="product.size || product.color">
              <Title v-if="product.size" 
                     :text="`Размер: ${product.size}`" 
                     size="size14" 
                     color="grey"/>
              <Title v-if="product.color" 
                     :text="`Цвет: ${product.color}`" 
                     size="size14" 
                     color="grey"/>
            </div>
            <Title :text="`${product.price} руб`" size="size16" color="dark-blue"/>
            
            <div class="quantity-control">
              <BaseButton @click="decreaseQuantity" text="-" size="small" />
              <span class="quantity">{{ product.quantity }}</span>
              <BaseButton @click="increaseQuantity" text="+" size="small" />
            </div>
        </div>
        <div class="actions">
          <BaseButton @click="removeItem" 
                      text="Удалить" 
                      color="red" 
                      size="small" />
        </div>
    </div>
    <hr class="hr--one">
</template>

<style scoped>
.container{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    gap: 20px;
}
.image{
    height: 170px;
    width: 140px;
    background-color: #f5f5f5;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.info{
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
}
.details {
    display: flex;
    gap: 15px;
    margin-top: 5px;
}
.quantity-control {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}
.quantity {
    min-width: 30px;
    text-align: center;
    font-weight: bold;
}
.actions {
    align-self: flex-start;
}
.hr--one {
    background-color: rgba(128, 128, 128, 0.3);
    height: 1px;
    border: none;
    margin-bottom: 20px;
    width: 720px;
}
</style>