// api/index.js
import axios from 'axios'
import { API_BASE_URL, HTTP_STATUS, PRODUCTS_LIMIT } from './constants'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making API request to: ${config.url}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    if (response.status === HTTP_STATUS.SUCCESS) {
      return response.data
    }
    return response
  },
  (error) => {
    console.error('API Error Details:', {
      message: error.message,
      code: error.code,
      url: error.config?.url,
      status: error.response?.status
    })
    
   
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error - check internet connection or CORS')
    }
    
    return Promise.reject(error)
  }
)

export default {
  async getProduct(id: string) {
    try {
      return await apiClient.get(`/products/${id}`)
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error)
      throw error
    }
  },

  async getProducts(limit = PRODUCTS_LIMIT, skip = 0) {
    try {
      return await apiClient.get(`/products?limit=${limit}&skip=${skip}`)
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },

  async getProductsByCategory(category: string, limit = PRODUCTS_LIMIT) {
    try {
      return await apiClient.get(`/products/category/${category}?limit=${limit}`)
    } catch (error) {
      console.error(`Error fetching ${category} products:`, error)
      throw error
    }
  },

  async searchProducts(query: string, limit = PRODUCTS_LIMIT) {
    try {
      return await apiClient.get(`/products/search?q=${query}&limit=${limit}`)
    } catch (error) {
      console.error(`Error searching products for "${query}":`, error)
      throw error
    }
  },

  async getCategories() {
    try {
      return await apiClient.get('/products/categories')
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }
}