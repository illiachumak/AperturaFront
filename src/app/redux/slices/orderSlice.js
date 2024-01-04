import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../services/base';

const initialState = {
  isLoading: false,
  isOk: false,
  returnState: null
};

export const orderFeedback = createAsyncThunk(
  'order/feedback',
  async ({ name, number }) => {
    try {
      const response = await axios.post(`${baseURL}feedback/`, { name, number });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const orderProduct = createAsyncThunk(
  'order/product',
  async ({ name, email, phone }) => {
    try {
      // Отримуємо дані з локального сховища
      const cartList = JSON.parse(localStorage.getItem('cart'));

      // Форматуємо дані для включення в запит
      const products = cartList.map(item => {
        return {
          title: item.title,
          total_price: item.price,
          image: item.image_preview,
          options: item.modifications.map(mod => mod.id),
          color: item.color,
          quantity: item.quantity
        };
      });

      // Відправляємо POST-запит для замовлення продукту
      const response = await axios.post(`${baseURL}order/`, {
        name,
        email,
        phone,
        products
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
);
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setIsOkFalse: (state) => {
      state.isOk = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderFeedback.pending, (state) => {
        state.isLoading = true;
        state.isOk = false;
        state.returnState = null;
      })
      .addCase(orderFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isOk = true;
      })
      .addCase(orderFeedback.rejected, (state) => {
        state.isLoading = false;
        state.isOk = false;
      })
      .addCase(orderProduct.pending, (state) => {
        state.isLoading = true;
        state.returnState = null;
      })
      .addCase(orderProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.returnState = {status: action.payload.status,
        data: action.payload.data
        };
      })
      .addCase(orderProduct.rejected, (state) => {
        state.isLoading = false;
        state.returnState = null;
      });
  },
});

export const selectOrderResponse = state=>state.order.returnState

export const { setIsOkFalse } = orderSlice.actions;

export default orderSlice.reducer;
