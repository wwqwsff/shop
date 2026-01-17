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

const product = ref({})
const showPaymentPopup = ref(false)
const showReturnPopup = ref(false)
const selectedSize = ref('')
const selectedColor = ref('')

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
</script>

<template>
  <DataLoader :loadFn="fetchProduct">
    <div class="product__card" v-if="product">
      <div class="product__card--image">
        <img :src="productImage" :alt="productTitle" />
      </div>
      <div class="product__card--info">
        <Title class="product__card--info--style" 
               :text="product.brand || 'Brand'" 
               size="size25" 
               color="dark-blue" />
        <Title class="product__card--info--style--one" 
               :text="productTitle" 
               size="size14" 
               color="grey" />
        <Title class="product__card--info--style--one" 
               :text="productPrice" 
               size="size14" 
               color="dark-blue" />
        
        <Title v-if="product.discountPercentage" 
               class="product__card--info--style--one" 
               :text="`Скидка: ${product.discountPercentage}%`" 
               size="size14" 
               color="red" />
        
        <Title v-if="product.rating" 
               class="product__card--info--style--one" 
               :text="`Рейтинг: ${product.rating}`" 
               size="size14" 
               color="dark-blue" />
        
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
          />
        </div>
        <BaseButton class="product__card--info--style--btn" 
                    text="Таблица размеров" />
        
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
          />
        </div>
        
        <div class="addToCard">
          <BaseButton 
            size="button--addCard" 
            text="ДОБАВИТЬ В КОРЗИНУ"
            :disabled="!isSelectionComplete"
            @click="handleAddToBasket"
          />
          <BaseButton 
            size="button--addCard" 
            text="КУПИТЬ В ОДИН КЛИК" 
            color="grey" 
            color-background="dark-blue"
            :disabled="!isSelectionComplete"
            @click="handleBuyNow"
          />
        </div>
        
        <div class="information">
          <BaseButton @click="showPaymentPopup = true"
                      text="Оплата и доставка" 
                      color="grey" />
          <BaseButton @click="showReturnPopup = true"
                      text="Возврат и доставка" 
                      color="grey" />
        </div>
      </div>
    </div>
    
    <PopUpWindow v-if="showPaymentPopup"
                 title="Оплата и доставка"
                 :text="paymentContent"
                 size="pay"
                 @close="showPaymentPopup = false" />
    
    <PopUpWindow v-if="showReturnPopup"
                 title="Возврат и доставка"
                 :text="returnContent"
                 size="return"
                 @close="showReturnPopup = false" />
  </DataLoader>
</template>

<style scoped>

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