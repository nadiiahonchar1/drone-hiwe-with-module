'use client'

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productsReducer from './productSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
