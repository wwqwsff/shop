import { createRouter, createWebHistory } from 'vue-router'
import {
  Dress,
  HomePage,
  Main,
  Tshirt,
  Trousers,
  Shoes,
  Sneakers,
  Bag,
  ManCatalog,
  Sport,
  Texnic,
  Electronic,
  CatalogPage
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
    path: '/category/shoes',
    name: 'Shoes',
    component: Shoes
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
    path: '/category/sneaker',
    name: 'Sneakers',
    component: Sneakers
  },
  {
    path: '/category/bag',
    name: 'Bag',
    component: Bag
  },
  {
    path: '/menCatalog',
    name: 'ManCatalog',
    component: ManCatalog
  },
  {
    path: '/category/sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/category/electronic',
    name: 'Electronic',
    component: Electronic
  },
  {
    path: '/category/texnic',
    name: 'Texnic',
    component: Texnic
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
