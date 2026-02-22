<script setup>
import { Title, DataLoader, BaseButton, PopUpWindow } from './index.ts'
import { computed, ref } from 'vue'
import { paymentContent, returnContent} from '../mock-api/product.ts'
import api from '../api/index.ts'
import { useBasketStore } from '../store/basket.ts'

const props = defineProps({
  productId: {
    type: [String, Number],
    required: true
  }
})

const { addToBasket } = useBasketStore()
const activePopup = ref(null)

const infoButtons = [
  { text: 'Оплата и доставка', type: 'payment', content: paymentContent, size: 'pay' },
  { text: 'Возврат и доставка', type: 'return', content: returnContent, size: 'return' }
]
const productInfo = computed(() => [
  {
    text: product.value.brand || 'Brand',
    size: 'size25',
    color: 'dark-blue',
    class: 'product__card--info--style'
  },
  {
    text: productTitle.value,
    size: 'size14',
    color: 'grey',
    class: 'product__card--info--style--one'
  },
  {
    text: productPrice.value,
    size: 'size14',
    color: 'dark-blue',
    class: 'product__card--info--style--one'
  },
  product.value.discountPercentage && {
    text: `Скидка: ${product.value.discountPercentage}%`,
    size: 'size14',
    color: 'red',
    class: 'product__card--info--style--one'
  },
  product.value.rating && {
    text: `Рейтинг: ${product.value.rating}`,
    size: 'size14',
    color: 'dark-blue',
    class: 'product__card--info--style--one'
  }
].filter(Boolean))

const openPopup = (type) => {
  activePopup.value = type
}

const closePopup = () => {
  activePopup.value = null
}
const product = ref({})
const selectedSize = ref('s') 
const selectedColor = ref('beige')
const fetchProduct = async () => {
  console.log(`Fetching product with ID: ${props.productId}`)
  try {
    const response = await api.getProduct(props.productId.toString())
    console.log('Product data:', response)
    product.value = response
    return response
  } catch (error) {
    console.error('Error fetching product from API:', error)
    
    const fallbackProduct = {
      id: props.productId,
      title: 'Пример товара',
      brand: 'Пример бренда',
      price: 2999,
    }
    
    product.value = fallbackProduct
    return fallbackProduct
  }
}
const sizeProducts = {
  xs: { title: 'XS' },
  s: { title: 'S' },
  m: { title: 'M' },
  l: { title: 'L' }
}

const colorProducts = {
  beige: { title: 'beige' },
  oranges: { title: 'oranges' },
  blue: { title: 'blue' },
  black: { title: 'black' }
}

const productTitle = computed(() => product.value?.title || '')
const productPrice = computed(() => product.value?.price ? `${product.value.price} руб` : '')
const productImage = computed(() => product.value?.thumbnail || '')
const isSelectionComplete = computed(() => selectedSize.value && selectedColor.value)

const handleAddToBasket = () => {
  if (!isSelectionComplete.value) return
  addToBasket(product.value, selectedSize.value, selectedColor.value)
}

const handleBuyNow = () => {
  if (!isSelectionComplete.value) return
  addToBasket(product.value, selectedSize.value, selectedColor.value)
  // Здесь можно добавить логику перехода к оформлению заказа
}
const actionButtons = [
  {
    text: 'ДОБАВИТЬ В КОРЗИНУ',
    handler: handleAddToBasket,
    class: 'addToCard--hover'
  },
  {
    text: 'КУПИТЬ В ОДИН КЛИК',
    handler: handleBuyNow,
    class: 'addToPay--hover',
    color: 'grey',
    colorBackground: 'dark-blue'
  }
]
const sizeGuideUrl = 'https://sezon16.ru/wp-content/uploads/2025/08/9pdFIE8oX8zZRKtgJkAItGmIn__bOLHQxrbs72tXKP2ekvP27rYGx9jTBOHqCvFDkYQsYnONvPAGbkUoT7automs-1-1200x422.jpg'
</script>

<template>
  <DataLoader :loadFn="fetchProduct">
    <div class="product__card" v-if="product">
      <div class="product__card--image">
        <img :src="productImage" :alt="productTitle" />
      </div>
      <div class="product__card--info">
        <Title
            v-for="(item, index) in productInfo"
            :key="index"
            :text="item.text"
            :size="item.size"
            :color="item.color"
            :class="item.class"
          />
                  
        <div v-if="product.description" 
             class="product__card--info--style--one">
          <Title text="Описание:" size="size14" color="dark-blue" />
          <p>{{ product.description }}</p>
        </div>
        
        <Title class="product__card--info--style--two" 
               text="Размер" 
               size="size14" 
               color="dark-blue" />
        <div class="product__card--btn--case">
          <BaseButton 
            v-for="(sizeProduct, key) in sizeProducts"
            :key="key"
            :text="sizeProduct.title"
            :class="['product__card--btn', { 'selected': selectedSize === key }]"
            @click="selectedSize = key"
            :is-active-border="selectedSize===key"
            
    
          />
        </div>
    
                <a 
        :href="sizeGuideUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BaseButton 
          class="product__card--info--style--btn" 
          text="Таблица размеров" 
        />
</a>
        <Title class="product__card--info--style--one" 
               text="Цвет" 
               size="size14" 
               color="dark-blue" />
        <div class="product__card--btn--case">
          <BaseButton 
            v-for="(colorProduct, key) in colorProducts"
            :key="key"
            :color="colorProduct.title"
            size="button--rectangle"
            :class="{ 'selected': selectedColor === key }"
            @click="selectedColor = key"
            :is-active-border="selectedColor === key"
          />
        </div>
        
        <div class="addToCard">
  <BaseButton
    v-for="button in actionButtons"
    :key="button.text"
    size="button--addCard"
    :text="button.text"
    :color="button.color"
    :color-background="button.colorBackground"
    :disabled="!isSelectionComplete"
    :class="button.class"
    @click="button.handler"
  />
</div>
        
        <div class="information">
  <BaseButton
    v-for="button in infoButtons"
    :key="button.type"
    :text="button.text"
    color="grey"
    class="information--style"
    @click="openPopup(button.type)"
  />
</div>
      </div>
    </div>
    
    <PopUpWindow
  v-if="activePopup"
  :title="infoButtons.find(btn => btn.type === activePopup)?.text"
  :text="infoButtons.find(btn => btn.type === activePopup)?.content"
  :size="infoButtons.find(btn => btn.type === activePopup)?.size"
  @close="closePopup"
/>
  </DataLoader>
</template>

<style scoped>
.product__card .addToPay--hover:hover {
  background-color: #0a202b;
  border: 2px solid #747474;
}
.addToCard--hover:hover{
  background-color: #e0dede;
  border: 2px solid #747474;
}
.product__card.information--style:hover{
  color: #999898;
}
body.popup-open .product__card {
  filter: blur(2px);
}
.information{
    display: flex;
    align-items: row;
    gap:25px
}
.addToCard{
    display: flex;
    align-items: row;
    flex-direction: column;
    gap: 1px;
}
.product__card--info--style--btn{
    height: 14px;
    text-align: left;
}
.product__card--btn--case{
    display: flex;
    align-items: row;
    gap:5px
}
.product__card--btn{
    width: 35px;
    height: 35px;
    border: 1px solid #0f303f;
}
.product__card.product__card--btn:hover{
  border: 3px solid #bebebe ;
  background-color:#e0dede;
}

.product__card--info--style--one{
    height: 14px;
}
.product__card--info--style--two{
    height: 14px;
    margin-top:15px;
}
.product__card--info--style{
    height: 25px;
    width: 400px;
    margin-bottom: 15px;
    text-transform:uppercase;
    
}
.product__card{
    width: 100%;
    height: 100%;
    padding-left:36%;
    display: flex;
    
    gap: 2%;
}
.product__card--image{
    width: 427px;
    height: 520px;
    display:flex;
}
.product__card--info{
 display: flex;
  align-items: row;
  flex-direction: column;
  gap: 10px;
  margin-top: -30px;
}</style>