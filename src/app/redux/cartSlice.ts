import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  article: string;
  quantity: number;
  total: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     increment: (
//       state,
//       action: PayloadAction<{ article: string; price: number }>
//     ) => {
//       state.quantity += 1;
//       state.article = action.payload.article;
//       state.total += action.payload.price;
//     },
//     decrement: (
//       state,
//       action: PayloadAction<{ article: string; price: number }>
//     ) => {
//       state.quantity = Math.max(0, state.quantity - 1);
//       state.article = action.payload.article;
//       state.total = Math.max(0, state.total - action.payload.price);
//     },
//   },
// });

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.total += action.payload.total;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

// export const { increment, decrement } = cartSlice.actions;

// export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
