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
} from './views'

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
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
