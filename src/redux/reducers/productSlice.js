import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as productAPI from '../../services/product.js'
import errorMessage from '../../utils/errorMessage.js'

const initialState = {
  loading: false,
  products: [],
  product: null
}

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (params={}, thunkAPI) => {
    try {
      const response = await productAPI.fetchProducts() 
      return response.data
    } catch (error) {
      const message = errorMessage(error)
      return thunkAPI.rejectWithVaue(message)
    }
  }
)

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (params={}, thunkAPI) => {
    try {
      const { id } = params
      const response = await productAPI.fetchProduct(id) 
      return response.data
    } catch (error) {
      const message = errorMessage(error)
      return thunkAPI.rejectWithVaue(message)
    }
  }
)
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
      })
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false
        state.product = null
      })
  }
})

export default productSlice.reducer;
