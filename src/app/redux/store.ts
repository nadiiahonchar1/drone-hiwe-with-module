'use client'

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
// import {
//   createAction,
//   createReducer,
//   UnknownAction,
//   PayloadAction,
// } from '@reduxjs/toolkit';

// interface CounterState {
//   value: number;
//   article: string;
// }
// const initialState: CounterState = { value: 0, article: '' };

// interface ArticlePayload {
//   value: number;
//   article: string;
// }

// const articleIncrement = createAction<ArticlePayload>('myValue/increment');
// const articleDecrement = createAction<ArticlePayload>('myValue/decrement');

// const orderReducer = createReducer(
//   initialState,
//   (builder) => {
//     builder
//       .addCase(articleIncrement, (state, action) => {
//         state.value += action.payload.value;
//         state.article = action.payload.article;
//       })
//       .addCase(articleDecrement, (state, action) => {
//         state.value -= action.payload.value;
//         state.article = action.payload.article;
//       });
      
//   }
// );

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
