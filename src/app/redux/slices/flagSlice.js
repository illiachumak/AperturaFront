import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: true
}

export const flagSlice = createSlice({
  name: 'flag',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      if (action.payload) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.style.overflow = 'hidden';
        document.body.classList.add('bg-overlay');
      } else {
        document.body.style.overflow = 'auto';
        document.body.classList.remove('bg-overlay');
      }
  },
},
  
  extraReducers: (builder) => {    
  },
})
export const { setLoading } = flagSlice.actions

export const selectIsLoading = state => state.flag.isLoading

export default flagSlice.reducer
