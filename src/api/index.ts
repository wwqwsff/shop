import axios from 'axios'
import { API_BASE_URL, HTTP_STATUS, PRODUCTS_LIMIT } from './constants'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
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
  getProduct(id: string) {
    return apiClient.get(`/products/${id}`)
  },

  getProducts(limit = PRODUCTS_LIMIT, skip = 0) {
    return apiClient.get(`/products?limit=${limit}&skip=${skip}`)
  },

  getProductsByCategory(category: string, limit = PRODUCTS_LIMIT) {
    return apiClient.get(`/products/category/${category}?limit=${limit}`)
  },

  searchProducts(query: string, limit = PRODUCTS_LIMIT) {
    return apiClient.get(`/products/search?q=${query}&limit=${limit}`)
  },

  getCategories() {
    return apiClient.get('/products/categories')
  }
}
