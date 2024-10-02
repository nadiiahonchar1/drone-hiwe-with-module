import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface cartState {
  quantity: number;
    article: string;
    total: number;
}

const initialState: cartState = {
  quantity: 0,
    article: '',
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (
      state,
      action: PayloadAction<{ article: string; price: number }>
    ) => {
      state.quantity += 1;
      state.article = action.payload.article;
      state.total += action.payload.price;
    },
    decrement: (
      state,
      action: PayloadAction<{ article: string; price: number }>
    ) => {
      state.quantity = Math.max(0, state.quantity - 1);
      state.article = action.payload.article;
      state.total = Math.max(0, state.total - action.payload.price);
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
