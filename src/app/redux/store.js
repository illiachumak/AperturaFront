import { configureStore } from '@reduxjs/toolkit'
import flagSlice from './slices/flagSlice'
import cartSlice from './slices/cartSlice'


export const store = configureStore({
  reducer: {
    flag: flagSlice,
    cart: cartSlice,
  },
})