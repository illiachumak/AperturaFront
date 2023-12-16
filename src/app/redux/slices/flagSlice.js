import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false
}

export const flagSlice = createSlice({
  name: 'flag',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      if (action.payload) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  },
},
  
  extraReducers: (builder) => {    
  },
})
export const { setLoading } = flagSlice.actions

export const selectIsLoading = state => state.flag.isLoading

export default flagSlice.reducer
