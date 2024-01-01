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
        document.body.style.height = '100vh';
      } else {
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }
  },
},
  
  extraReducers: (builder) => {    
  },
})
export const { setLoading } = flagSlice.actions

export const selectIsLoading = state => state.flag.isLoading

export default flagSlice.reducer
