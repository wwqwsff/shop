import { createRouter, createWebHistory } from 'vue-router'
import Dress from './views/Dress.vue'
import HomePage from './views/HomePage.vue'
import Main from './components/Main.vue'
import Tshirt from './views/Tshirt.vue'
import Trousers from './views/Trousers.vue'
import Shoes from './views/Shoes.vue'
import Sneakers from './views/Sneakers.vue'
import Bag from './views/Bag.vue'

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
    name: 'Sneaker',
    component: Sneakers
  },
  {
    path: '/category/bag',
    name: 'Bag',
    component: Bag
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
