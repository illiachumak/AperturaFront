import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSelector } from '@reduxjs/toolkit';

// Generate a unique cartId
const generateCartId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const areModificationsEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const sortedArr1 = arr1.slice().sort(compareModifications);
  const sortedArr2 = arr2.slice().sort(compareModifications);

  return sortedArr1.every((mod1, index) => compareModifications(mod1, sortedArr2[index]) === 0);
};

const compareModifications = (mod1, mod2) => {
  // Порівнюємо кожне поле об'єкта модифікації
  if (mod1.name !== mod2.name) {
    return mod1.name.localeCompare(mod2.name);
  }

  if (mod1.value !== mod2.value) {
    return mod1.value.localeCompare(mod2.value);
  }

  if (mod1.price !== mod2.price) {
    return mod1.price.localeCompare(mod2.price);
  }

  return 0;
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
      const { id, quantity, modifications, image_preview } = action.payload;
      const cartId = generateCartId();
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && areModificationsEqual(item.modifications, modifications) && item.image_preview === image_preview
      );
    
      if (existingItemIndex !== -1) {
        // Якщо айтем з таким id і modifications вже існує у кошику
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // Якщо айтема з таким id та modifications немає у кошику, то додаємо новий айтем
        state.items = [...state.items, { ...action.payload, cartId }];
      }
    
      // Оновлення localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      state.items = state.items.filter((item) => item.cartId !== cartId);
      if(state.items.length === 0 ) {
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
        state.isOpen = false}
      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    changeQuantity: (state, action) => {
      const { cartId, quantity } = action.payload;
      console.log(cartId)
      const existingItem = state.items.find((item) => item.cartId === cartId);
      console.log(existingItem)
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
