<script setup>
import { Title, Input, BaseButton, BasketProduct } from './index.ts';

const inputTexts = {
    name: { title: 'Введите имя' },
    sname: { title: 'Введите фамилию' },
    email: { title: 'Введите email' },
    number: { title: 'Введите номер телефона' }
}
</script>

<template>
    <Title class="basket__title" text="КОРЗИНА" color="dark-blue" size="size25"/>
    <hr class="hr--one">
    <div class="container">
        <div class="left-section">
            <div class="container-input">
                <Input 
                    v-for="(inputText, key) in inputTexts"
                    :key="key"
                    :text="inputText.title" 
                />
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
                    <BaseButton class="btn2" text="Получить скидку" color="orang"/>
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
                    />
                </div>
            </div>
        </div>
        
        <div class="vertical-divider"></div>
        
        <div class="right-section">
            <BasketProduct/>
            <BasketProduct/>
            <Title text="Всего:" color="dark-blue" size="size20"></Title>
        </div>
    </div>
  <hr class="hr--one">
</template>

<style scoped>
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