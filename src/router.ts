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
  Parfum ,
 SunGlasses,
 MenWatch ,
 MenTshirt,
 ProductCard,
 PopUpWindow,
Basket,
Product
} from './views'
import path from 'path'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
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
    component: Dress
  },
  {
    path: '/category/parfum',
    name: 'Parfum',
    component: Parfum 
  },
  {
    path:'/category/pop',
    name:'PopUpWindow',
    component: PopUpWindow
  },
  {
    path: '/category/trousers',
    name: 'Trousers',
    component: Trousers
  },
  {
    path: '/category/tshirt',
    name: 'Tshirt',
    component: Tshirt
  },
 
  {
    path: '/category/homedecoration',
    name: 'HomeDecoration',
    component: HomeDecoration
  },
  {
    path: '/menCatalog',
    name: 'ManCatalog',
    component: ManCatalog
  },
  
  {
    path: '/category/mentshirt',
    name: 'MenTshirt',
    component: MenTshirt
  },
  {
    path: '/category/menwatch',
    name: 'MenWatch',
    component: MenWatch 
  },
  {
    path: '/category/skincare',
    name: 'Skincare',
    component: Skincare 
  },{
    path: '/category/sunglasses',
    name: 'SunGlasses',
    component:SunGlasses
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
