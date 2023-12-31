import { configureStore } from '@reduxjs/toolkit'
import flagSlice from './slices/flagSlice'
import cartSlice from './slices/cartSlice'
import orderSlice from './slices/orderSlice'

export const store = configureStore({
  reducer: {
    flag: flagSlice,
    cart: cartSlice,
    order: orderSlice,
  },
})