// src/api/index.js
import axios from 'axios'
import { API_BASE_URL, HTTP_STATUS, PRODUCTS_LIMIT } from './constants'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.response.use(
  (response) => {
    if (response.status === HTTP_STATUS.SUCCESS) {
      return response.data
    }
    return response
  },
  (error) => {
    console.error('API Error', error)
    return Promise.reject(error)
  }
)

export default {
  // Получить один товар
  getProduct(id) {
    return apiClient.get(`/products/${id}`) // Исправлены кавычки на обратные
  },

  // Получить список товаров
  getProducts(limit = PRODUCTS_LIMIT, skip = 0) {
    return apiClient.get(`/products?limit=${limit}&skip=${skip}`)
  },

  // Получить товары по категории
  getProductsByCategory(category, limit = PRODUCTS_LIMIT) {
    return apiClient.get(`/products/category/${category}?limit=${limit}`)
  },

  // Поиск товаров
  searchProducts(query, limit = PRODUCTS_LIMIT) {
    return apiClient.get(`/products/search?q=${query}&limit=${limit}`)
  },

  // Получить все категории
  getCategories() {
    return apiClient.get('/products/categories')
  }
}
