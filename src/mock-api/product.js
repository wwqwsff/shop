import Image1 from '../assets/product-image1.png'
import Image2 from '../assets/product-image2.png'
import Image3 from '../assets/product-image3.png'
import Image4 from '../assets/product-image4.png'
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
export const containers = [
  [1, 2, 3],
  [4, 1, 3],
  [2, 4, 3],
  [1, 2, 3],
  [2, 4, 3]
]
