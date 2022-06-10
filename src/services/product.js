import axios from 'axios'
const backend_root_url = process.env.REACT_APP_BACKEND_ROOT_URL

export const fetchProducts = async () => {
  const products = axios.get(`${backend_root_url}/products`)
  return products
}
export const fetchProduct = async (id) => {
  const product = axios.get(`${backend_root_url}/products/${id}`)
  return product
}
