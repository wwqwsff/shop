<script setup>
import { Title, Input, BaseButton, BasketProduct, PopUpWindow } from './index.ts'
import { useBasketStore } from '../store/basket.ts'
import { computed, ref } from 'vue'
import {discountContent} from '../mock-api/product.ts'


const { basketItems, totalPrice, removeFromBasket, updateQuantity } = useBasketStore()
const errorMessage = ref('')
const showPaymentDiscount = ref(false)
const infoInputText = ref({
    name: '',
    surname: '',
    email: '',
    number: ''
})

const error = ref({
    name: false,
    surname: false,
    email: false,
    number: false
})

const total = computed(() => {
    return `${totalPrice.value} руб`
})


const formFields = [
    { 
        key: 'name',
        title: 'Введите имя',
        modelKey: 'name'
    },
    { 
        key: 'surname',
        title: 'Введите фамилию',
        modelKey: 'surname'
    },
    { 
        key: 'email',
        title: 'Введите email',
        modelKey: 'email'
    },
    { 
        key: 'number',
        title: 'Введите номер телефона',
        modelKey: 'number'
    }
]


const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validatePhone = (phone) => {
    
    const digits = phone.replace(/\D/g, '')
    return digits.length >= 10
}

const toOrderProduct = () => {
    
    error.value = {
        name: false,
        surname: false,
        email: false,
        number: false
    }
    errorMessage.value = ''
    
    let hasError = false
    
    
    if (!infoInputText.value.name.trim()) {
        error.value.name = true
        hasError = true
    }
    
    if (!infoInputText.value.surname.trim()) {
        error.value.surname = true
        hasError = true
    }
    
    if (!infoInputText.value.email.trim()) {
        error.value.email = true
        hasError = true
    } else if (!validateEmail(infoInputText.value.email)) {
        error.value.email = true
        hasError = true
        errorMessage.value = 'Введите корректный email'
    }
    
    if (!infoInputText.value.number.trim()) {
        error.value.number = true
        hasError = true
    } else if (!validatePhone(infoInputText.value.number)) {
        error.value.number = true
        hasError = true
        if (!errorMessage.value) {
            errorMessage.value = 'Введите корректный номер телефона'
        }
    }
    
    
    if (basketItems.length === 0) {
        errorMessage.value = 'Корзина пуста'
        return
    }
    
    if (hasError && !errorMessage.value) {
        errorMessage.value = 'Заполните обязательные поля'
        return
    }
    
    
    console.log('Отправляем заказ:', infoInputText.value)
    
}
</script>

<template>
    <Title class="basket__title" text="КОРЗИНА" color="dark-blue" size="size25"/>
    <hr class="hr--one">
    <div class="container">
        <div class="left-section">
            <div class="container-input">
                    <Input 
                        v-for="field in formFields"
                        :key="field.key"
                        :placeholder="field.title"  
                        v-model="infoInputText[field.modelKey]"
                        :hasError="error[field.modelKey]"
                        :type="field.modelKey === 'email' ? 'email' : field.modelKey === 'number' ? 'tel' : 'text'"
                        />
                
                 <div v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                </div>
                
                <Title 
                    class="basket__delivery" 
                    text="ДОСТАВКА" 
                    color="dark-blue" 
                    size="size14"
                />
            </div>
            <div class="container__next">
                <Title 
                    class="basket__deliver" 
                    color="dark-blue" 
                    text="Одесса, Отделение №1: Киевское шоссе (ран. Ленинградское шоссе), 27 Отделение «Новая Почта»"
                    size="size14"
                />
                <div class="btn--next">
                    <BaseButton class="btn1" text="Редактировать" color="orang"/>
                    <BaseButton 
                    @click="showPaymentDiscount =true"
                    class="btn2" 
                    text="Получить скидку" 
                    color="orang"/>
                </div>
                <div class="container-pay">
                    <Title 
                        class="basket__delivery" 
                        text="СПОСОБ ОПЛАТЫ" 
                        color="dark-blue" 
                        size="size14"
                    />
                    <Title 
                        class="basket__deliver" 
                        text="Карточкой на сайте" 
                        color="dark-blue" 
                        size="size14"
                    />
                    <Title 
                        class="basket__deliver" 
                        text="При получении заказа" 
                        color="dark-blue" 
                        size="size14"
                    />
                    <BaseButton 
                        size="dilivery" 
                        color="withe" 
                        colorBackground="greylight" 
                        class="basket__deliver" 
                        text="ЗАКАЗАТЬ"
                        @click="toOrderProduct"
                    />
                </div>
            </div>
        </div>
        
        <div class="vertical-divider"></div>
        
        <div class="right-section">
            <BasketProduct 
                v-for="item in basketItems"
                :key="`${item.id}-${item.size}-${item.color}`"
                :product="item"
                @remove="removeFromBasket(item.id)"
                @update-quantity="(qty) => updateQuantity(item.id, qty)"
            />
            <Title :text="`Всего: ${total}`" color="dark-blue" size="size20"></Title>
        </div>
    </div>
    <hr class="hr--one">
    <PopUpWindow v-if="showPaymentDiscount"
    :text="discountContent"
    size="pay"
    @close="showPaymentDiscount=false"></PopUpWindow>
</template>

<style scoped>

.error-message {
    color: #ff4444;
    font-size: 14px;
    margin: 10px 15px;
    padding: 8px;
    background-color: rgba(255, 68, 68, 0.1);
    border-radius: 4px;
    border-left: 3px solid #ff4444;
}
.container {
    display: flex;
    width: 100%;
    min-height: 685px;
    gap: 0;
    margin-left: 5%;
}

.hr--one {
    background-color: rgba(128, 128, 128, 0.3);
    height: 1px;
    border: none;
    margin-bottom: 20px;
}

.vertical-divider {
    width: 1px;
    background-color: rgba(128, 128, 128, 0.3);
    margin: 0;
   
}

.left-section {
    flex: 1;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.right-section {
    flex: 1;
    padding: 0 30px;
}

.basket__title {
    text-align: center;
    margin-bottom: 20px;
}

.container-input {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
}

.container__next {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.basket__delivery {
    text-align: left;
    color: #0f303f;
    font-weight: 700;
    margin: 0;
    margin-left: 15px;
}

.basket__deliver {
    text-align: left;
    color: #0f303f;
    margin: 0;
    line-height: 1.4;
    margin-left: 15px;
}

.btn--next {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-left: 15px;
}

.btn1, .btn2 {
    margin: 0 !important;
}


.container-pay {
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin-top: 15px;
}
</style>