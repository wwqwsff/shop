export const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://dummyjson.com'

export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
}
export const PRODUCTS_LIMIT = 10
