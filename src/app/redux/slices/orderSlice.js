import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseURL} from '../../services/base'
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
});

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
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
        state.returnState = action.payload;
      })
      .addCase(orderFeedback.rejected, (state) => {
        state.isLoading = false;
        state.isOk = false;
        state.returnState = null;
        // You can handle the error here or dispatch additional actions
      });
  },
});

export default orderSlice.reducer;
