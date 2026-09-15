import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload
      const existing = state.items.find((item) => item.id === plant.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...plant, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const id = action.payload
      state.items = state.items.filter((item) => item.id !== id)
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        item.quantity += amount
        if (item.quantity < 1) item.quantity = 1
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

export default cartSlice.reducer
