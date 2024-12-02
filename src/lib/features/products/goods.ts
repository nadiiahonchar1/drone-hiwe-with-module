import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProductsByCategory,
  getProductsBySubCategory,
  getProductByID,
} from '@/app/admin/api/productsDB';

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category: string, thunkAPI) => {
    try {
      const data = await getProductsByCategory(category);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductsBySubCategory = createAsyncThunk(
  'products/fetchBySubCategory',
  async (subCategory: string, thunkAPI) => {
    try {
      const data = await getProductsBySubCategory(subCategory);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductByID = createAsyncThunk(
  'products/fetchByID',
  async (productId: string, thunkAPI) => {
    try {
      const data = await getProductByID(productId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
