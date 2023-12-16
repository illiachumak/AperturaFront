import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.price *= quantity; 
      } else {
        state.items.push(action.payload);
      }

      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      if(state.items.length === 0 ) state.isOpen = false
      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.uid === id);
      if (existingItem) {
        if (existingItem.quantity === 1 && quantity === -1)  return;
        else{
          existingItem.quantity += quantity;
          localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
  },
    initializeCartFromStorage: (state) => {
      state.items = JSON.parse(localStorage.getItem('cart')) || [];
    },
  },
});

export const selectIsCartOpen = (state) => state.cart.isOpen;
export const selectCartItems = (state) => state.cart.items;

export const {
  openCart,
  closeCart,
  toggleCart,
  addToCart,
  removeFromCart,
  changeQuantity,
  initializeCartFromStorage,
} = cartSlice.actions;

export default cartSlice.reducer;