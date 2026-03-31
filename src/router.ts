import { createRouter, createWebHistory } from 'vue-router'
import {
  Dress,
  HomePage,
  Main,
  Tshirt,
  Trousers,
  Skincare,
  HomeDecoration,
  ManCatalog,
  Parfum,
 SunGlasses,
 MenWatch,
 MenTshirt,
 ProductCard,
 PopUpWindow,
Basket,
Product
} from './views'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: { breadcrumb: 'Главная',
      parent: '/'
     }
  },
  {
    path: '/one',
    component: HomePage
  },
  {
    path: '/basket',
    component: Basket
  },
  {
  path: '/product/:id',
  name: 'Product',
  component: Product
  },
  {
    path: '/category/dress',
    name: 'Dress',
    component: Dress,
    meta: { breadcrumb: 'Платья',
      parent: '/' }
  },
  {
    path: '/category/parfum',
    name: 'Parfum',
    component: Parfum,
    meta: { breadcrumb: 'Парфюм',
      parent: '/' }
  },
  {
    path:'/category/pop',
    name:'PopUpWindow',
    component: PopUpWindow
  },
  {
    path: '/category/trousers',
    name: 'Trousers',
    component: Trousers,
    meta: { breadcrumb: 'Брюки',
      parent: '/' }
  },
  {
    path: '/category/tshirt',
    name: 'Tshirt',
    component: Tshirt,
    meta: { breadcrumb: 'Футболки',
      parent: '/' }
  },
 
  {
    path: '/category/homedecoration',
    name: 'HomeDecoration',
    component: HomeDecoration,
    meta: { breadcrumb: 'Декорации',
      parent: '/' }
  },
  {
    path: '/menCatalog',
    name: 'ManCatalog',
    component: ManCatalog,
    meta: { breadcrumb: 'Мужчинам',
      parent: '/' }
  },
  
  {
    path: '/category/mentshirt',
    name: 'MenTshirt',
    component: MenTshirt,
    meta: { breadcrumb: 'Мужские футболки',
      parent: '/' }
  },
  {
    path: '/category/menwatch',
    name: 'MenWatch',
    component: MenWatch,
    meta: { breadcrumb: 'Часы',
      parent: '/' }
  },
  {
    path: '/category/skincare',
    name: 'Skincare',
    component: Skincare,
    meta: { breadcrumb: 'Макияж' ,
      parent: '/'}
  },{
    path: '/category/sunglasses',
    name: 'SunGlasses',
    component:SunGlasses,
    meta: { breadcrumb: 'Солнечные очки',
      parent: '/' }
  },
  {
    path:'/category/product',
    name: 'ProductCard',
    component: ProductCard
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
