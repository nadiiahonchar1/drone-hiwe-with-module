'use client'

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import productsReducer from './features/products/productSlice';

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//     products: productsReducer,
//   },
// });

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      products: productsReducer,
    },
  });
};


// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
