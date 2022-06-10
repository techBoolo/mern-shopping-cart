import { createSlice } from '@reduxjs/toolkit'

const localStorageItems = 
    window.localStorage.getItem('items') 
      ? JSON.parse(window.localStorage.getItem('items')) 
      : [] 
const initialState = {
  items: localStorageItems
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const itemExists = state.items.find(i => i._id === item._id)
      let items;
      if(itemExists) {
        items = state.items.map(i => i._id === item._id ? item : i)
      } else {
          items = [...state.items, item]
      }
      window.localStorage.setItem('items', JSON.stringify(items))
      return {
        ...state,
        items
      }
    },

    removeFromCart(state, action) {
      const id = action.payload
      const items = state.items.filter(item => item._id !== id)
      window.localStorage.setItem('items', JSON.stringify(items))
      return {
        ...state,
        items: items
      }
    },
    resetCart(state, action) {
      window.localStorage.removeItem('items')
      return {
        ...state,
        items: []
      }
    }
  },
  extraReducers: {

  }
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions
export default cartSlice.reducer;
