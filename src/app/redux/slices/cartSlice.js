import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSelector } from '@reduxjs/toolkit';

// Generate a unique cartId
const generateCartId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const initialState = {
  isOpen: false,
  sendModal: false,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
      setTimeout(()=> {
        document.body.style.overflow = 'hidden';
      },100)
    },
    closeCart: (state) => {
      state.isOpen = false;
      state.sendModal = false;
      document.body.style.overflow = 'auto';
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
      if(state.isOpen){
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
      } else {
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }
    },
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const cartId = generateCartId();
      const existingItem = state.items.find((item) => item.cartId === cartId);
      if (existingItem) {
        existingItem.price *= quantity; 
      } else {
        state.items = [...state.items, { ...action.payload, cartId }];
      }

      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      state.items = state.items.filter((item) => item.cartId !== cartId);
      if(state.items.length === 0 ) state.isOpen = false
      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    changeQuantity: (state, action) => {
      const { cartId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.cartId === cartId);
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

    openSendModal: (state) => {
      state.sendModal = true;
      state.isOpen = false;
    },
    closeSendModal: (state) => {
      state.sendModal = false;
      document.body.style.overflow = 'auto';
    }
  },
});
export const selectIsSendModalOpen = (state) => state.cart.sendModal;
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
  openSendModal,
  closeSendModal,
} = cartSlice.actions;

export default cartSlice.reducer;
