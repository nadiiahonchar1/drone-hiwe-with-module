'use client'
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import cartSlice from './features/cart/cartSlice';
import productsReducer from './features/products/productSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;