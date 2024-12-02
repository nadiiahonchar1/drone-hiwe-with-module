import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductsByCategory,
  fetchProductsBySubCategory,
  fetchProductByID,
} from './goods';

interface ProductState {
  items: any;
  selectedProduct: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  selectedProduct: null,
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchProductsBySubCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductsBySubCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsBySubCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchProductByID.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload || null;
      })
      .addCase(fetchProductByID.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
