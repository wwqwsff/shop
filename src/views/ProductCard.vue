<script setup>
import { Title, DataLoader,BaseButton,PopUpWindow} from './index.ts'
import { computed, ref, onMounted } from 'vue';
import { paymentContent,returnContent } from '../mock-api/product.ts'
import api from '../api/index.ts'
const fetchProducts = async () => {
  console.log('fetchProducts')
  const response = await api.getProductsByCategory('mens-shirts', 20)
  products.value = response.products[0]
}
const product = ref({})
onMounted(()=>{
    fetchProducts()
})
const sizeProducts = {
    xs:{title: 'XS'},
    s:{title:'S'},
    m:{title: 'M'},
    l:{title:'L'}

}
const colorProducts = {
    beige:{title:'beige'},
    oranges:{title:'oranges'},
    blue:{title:'blue'},
    black:{title:'black'},
}

const showPaymentPopup = ref(false)
const showReturnPopup = ref(false)


</script>
<template>
    <DataLoader>
    <div class="product__card">
        <div class="product__card--image">
            <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="product__card--info">
            <Title class='product__card--info--style' text ='American vintage' size="size25" color='dark-blue'/>
            <Title class="product__card--info--style--one" text ='Classic dress' size="size14" color='grey'/>
            <Title class='product__card--info--style--one' text ='12000 руб' size="size14" color='dark-blue'/>
            <Title  class='product__card--info--style--two' text ='Размер' size="size14" color='dark-blue'/>
            <div class="product__card--btn--case">
                <BaseButton v-for='(sizeProduct,key) in sizeProducts'
                :key = 'key'
                :text="sizeProduct.title"
                class="product__card--btn"/>
            </div>
            <BaseButton  class='product__card--info--style--btn' text="Таблица размеров"/>
            <Title  class='product__card--info--style--one' text ='Цвет' size="size14" color='dark-blue'/>
            <div class="product__card--btn--case">
                <BaseButton v-for='(colorProduct,key) in colorProducts'
                :key="key"
                :color="colorProduct.title"
                size="button--rectangle"
                />
            </div>
            <div class="addToCard">
                <BaseButton size="button--addCard" text="ДОБАВИТЬ В КОРЗИНУ"/>
                <BaseButton size="button--addCard" text="КУПИТЬ В ОДИН КЛИК" color="grey" color-background="dark-blue"/>
            </div>
            <div class="information">
                <BaseButton 
                @click="showPaymentPopup = true"
                text="Оплата и доставка" 
                color="grey" 
                
            />
            <BaseButton 
                @click="showReturnPopup = true"
                text="Возврат и доставка" 
                color="grey" 
                
            />
            </div>
        </div>
    </div>
      <PopUpWindow 
      v-if="showPaymentPopup"
      title="Оплата и доставка"
      :text="paymentContent"
      size="pay"
      @close="showPaymentPopup = false"
    />
    
    <!-- Всплывающее окно возврата -->
    <PopUpWindow 
      v-if="showReturnPopup"
      title="Возврат и доставка"
      :text="returnContent"
      size="return"
      @close="showReturnPopup = false"
    />
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
    background-color:rgba(183, 176, 176, 0.715);
    display:flex;
}
.product__card--info{
 display: flex;
  align-items: row;
  flex-direction: column;
  gap: 10px;
  margin-top: -30px;
}</style>