import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '@/app/helpers/typings';
import {
  fetchSubCategoryIfNeeded,
  fetchCategoryIfNeeded,
} from './goods';


const initialState: ProductState = {
  items: [],
  loadedCategories: [],
  loadedSubCategories: [],
  currentCategory: null,
  currentSubCategory: null,
  selectedProduct: null,
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProductById: (state, action: PayloadAction<string>) => {
      const product = state.items.find((item) => item.id === action.payload);
      state.selectedProduct = product || null;
    },
  },
  extraReducers: (builder) => {
    // Обробка категорій
    builder
      .addCase(fetchCategoryIfNeeded.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCategoryIfNeeded.fulfilled, (state, action) => {
        const { category, products } = action.payload;
        if (products) {
          state.items.push(...products);
          state.loadedCategories.push(category);
          state.currentCategory = category; // Зберігаємо поточну категорію
        }
        state.status = 'succeeded';
      })
      .addCase(fetchCategoryIfNeeded.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load category';
      });

    // Обробка підкатегорій
    builder
      .addCase(fetchSubCategoryIfNeeded.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSubCategoryIfNeeded.fulfilled, (state, action) => {
        const { subCategory, products } = action.payload;
        if (products) {
          state.items.push(...products);
          state.loadedSubCategories.push(subCategory);
          state.currentSubCategory = subCategory; // Зберігаємо поточну підкатегорію
        }
        state.status = 'succeeded';
      })
      .addCase(fetchSubCategoryIfNeeded.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load subcategory';
      });    
  },
});

export const { selectProductById } = productsSlice.actions;
export default productsSlice.reducer;
