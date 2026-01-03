import Image1 from '../assets/product-image1.png'
import Image2 from '../assets/product-image2.png'
import Image3 from '../assets/product-image3.png'
import Image4 from '../assets/product-image4.png'
import Image5 from '../assets/tshirt-im1.jpg'
import Image6 from '../assets/tshirt-im2.jpg'
import Image7 from '../assets/tshirt-im3.jpg'
import Image8 from '../assets/tshirt-im4.jpg'
import Img1 from '../assets/bag1.jpg'
import Img2 from '../assets/bag2.jpg'
import Img3 from '../assets/bag3.jpg'
import Img4 from '../assets/bag4.jpg'

export const products = {
  1: {
    image: Image1,
    nameProduct: 'T-SHIRT',
    originalPrice: 3100,
    categories: 'Футболки и топы',
    interest: 10
  },
  2: {
    image: Image2,
    nameProduct: 'BLOUSE',
    originalPrice: 4050,
    categories: 'Свитера и толстовки',
    interest: 5
  },
  3: {
    image: Image3,
    nameProduct: 'COAT',
    originalPrice: 5500,
    categories: 'Верхняя одежда',
    interest: 0
  },
  4: {
    image: Image4,
    nameProduct: 'TRUSERS',
    originalPrice: 2700,
    categories: 'Брюки и шорты',
    interest: 0
  }
}
export const productsBG = {
  1: {
    image: Img1,
    nameProduct: 'Mini Luka',
    originalPrice: 3100,
    categories: 'Сумки',
    interest: 10
  },
  2: {
    image: Img2,
    nameProduct: 'Black wood',
    originalPrice: 4050,
    categories: 'Сумки',
    interest: 5
  },
  3: {
    image: Img3,
    nameProduct: 'Cute momit',
    originalPrice: 5500,
    categories: 'Сумки',
    interest: 0
  },
  4: {
    image: Img4,
    nameProduct: 'Russiwef',
    originalPrice: 2700,
    categories: 'Сумки',
    interest: 0
  }
}
export const productsTS = {
  1: {
    image: Image5,
    nameProduct: 'T-SHIRT',
    originalPrice: 3100,
    categories: 'Футболки и топы',
    interest: 10
  },
  2: {
    image: Image6,
    nameProduct: 'BLOUSE',
    originalPrice: 4050,
    categories: 'Футболки и топы',
    interest: 5
  },
  3: {
    image: Image7,
    nameProduct: 'COAT',
    originalPrice: 5500,
    categories: 'Футболки и топы',
    interest: 0
  },
  4: {
    image: Image8,
    nameProduct: 'TRUSERS',
    originalPrice: 2700,
    categories: 'Футболки и топы',
    interest: 0
  }
}
export const containers = [
  [1, 2, 3],
  [4, 1, 3],
  [2, 4, 3],
  [1, 2, 3],
  [2, 4, 3]
]
 export const paymentContent = `
Оплата

Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. 

Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.

Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.

На сайте нашего интернет-магазина мы принимаем оплату платежными картами Visa и Mastercard. 

Безопасность проведения платежей у нас гарантирована системой eCommerceConnect с использованием современного стандарта «3-D Secure».

Доставка заказов клиентам интернет-магазина ALLEGRIA осуществляется по территории всей Украины курьерской службой "Нова пошта".
`;
export const returnContent = `Возврат и обмен

Возврат товаров, приобретенных в интернет-магазине ALLEGRIA, происходит согласно Закону Украины «О защите прав потребителей».

Вы можете вернуть товар на протяжении 14 дней со дня покупки.

Как оформить заявку на возврат?

Если купленная вещь Вам не понравилась или не подошла — свяжитесь с нашим контакт центром по телефону 000 00 000 и мы поможем оформить заявку на возврат.

Какие есть условия по возврату товара?

Обмен и возврат товара производится в том случае, если указанный товар не был в употреблении, полностью сохранен его товарный вид — без повреждений и следов ношения, оригинальная упаковка, а также бирки, пломбы, ярлыки, фирменные знаки.

Не возвращаются и не подлежат обмену купальники, нижнее белье, чулочно-носочные изделия, предметы личной гигиены, перчатки.

Вы можете осуществить возврат товара непосредственно в наших розничных магазинах, расположенных в Киеве, Харькове, Днепре и Одессе.

Для жителей других городов Украины пересылка товара перевозчиком Новой Почтой или любым другим, на склад интернет-магазина ALLEGRIA, расположенного в городе Харькове, осуществляется за счет компании.`;

export const mockProducts = [
  {
    id: 1,
    title: 'Elegant Evening Dress',
    description: 'Beautiful evening dress for special occasions',
    price: 12000,
    discountPercentage: 15,
    rating: 4.8,
    stock: 25,
    brand: 'American Vintage',
    category: 'womens-dresses',
    thumbnail: 'https://via.placeholder.com/400x600/CCCCCC/333333?text=Dress+1',
    images: [
      'https://via.placeholder.com/400x600/CCCCCC/333333?text=Dress+1-1',
      'https://via.placeholder.com/400x600/CCCCCC/333333?text=Dress+1-2',
      'https://via.placeholder.com/400x600/CCCCCC/333333?text=Dress+1-3'
    ]
  },
  {
    id: 2,
    title: 'Summer Floral Dress',
    description: 'Light floral dress perfect for summer',
    price: 8900,
    discountPercentage: 10,
    rating: 4.5,
    stock: 42,
    brand: 'Summer Style',
    category: 'womens-dresses',
    thumbnail: 'https://via.placeholder.com/400x600/CCCCCC/333333?text=Dress+2',
    images: [
      'https://via.placeholder.com/400x600/CCCCCC/333333?text=Dress+2-1',
      'https://via.placeholder.com/400x600/CCCCCC/333333?text=Dress+2-2'
    ]
  }
  // Добавьте больше товаров по аналогии
]