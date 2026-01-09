import { ref, computed } from 'vue'
import type { Ref } from 'vue'

export interface BasketItem {
  id: string | number
  title: string
  brand: string
  price: number
  thumbnail: string
  quantity: number
  size?: string
  color?: string
}

const basketItems: Ref<BasketItem[]> = ref([])

export function useBasketStore() {
  const addToBasket = (product: any, size?: string, color?: string) => {
    const existingItemIndex = basketItems.value.findIndex(
      item => item.id === product.id && item.size === size && item.color === color
    )

    if (existingItemIndex !== -1) {
      basketItems.value[existingItemIndex].quantity += 1
    } else {
      basketItems.value.push({
        id: product.id,
        title: product.title,
        brand: product.brand,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
        size,
        color
      })
    }
    
    localStorage.setItem('basket', JSON.stringify(basketItems.value))
  }

  const removeFromBasket = (id: string | number) => {
    const index = basketItems.value.findIndex(item => item.id === id)
    if (index !== -1) {
      basketItems.value.splice(index, 1)
      localStorage.setItem('basket', JSON.stringify(basketItems.value))
    }
  }

  const updateQuantity = (id: string | number, quantity: number) => {
    const item = basketItems.value.find(item => item.id === id)
    if (item && quantity > 0) {
      item.quantity = quantity
      localStorage.setItem('basket', JSON.stringify(basketItems.value))
    }
  }

  const totalPrice = computed(() => {
    return basketItems.value.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  })

  const totalItems = computed(() => {
    return basketItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  
  const loadFromStorage = () => {
    const stored = localStorage.getItem('basket')
    if (stored) {
      basketItems.value = JSON.parse(stored)
    }
  }

  
  loadFromStorage()

  return {
    basketItems: computed(() => basketItems.value),
    addToBasket,
    removeFromBasket,
    updateQuantity,
    totalPrice,
    totalItems
  }
}