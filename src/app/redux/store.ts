'use client'
import { configureStore } from '@reduxjs/toolkit';
import {
  createAction,
  createReducer,
  UnknownAction,
  PayloadAction,
} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}
const initialState = { value: 0 } satisfies CounterState as CounterState;

const increment = createAction<number>('myValue/increment');
const decrement = createAction<number>('myValue/decrement');

function isActionWithNumberPayload(
  action: UnknownAction
): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

const myReducer = createReducer(
  initialState,
  //   {
  //   [increment]: (state, action) => {
  //     state + action.payload;
  //   },
  //   [decrement]: (state, action) => {
  //     state - action.payload;
  //   },
  // }
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.value += action.payload;
      })
      .addCase(decrement, (state, action) => {
        state.value -= action.payload;
      })
      // .addMatcher(isActionWithNumberPayload, (state, action) => {})
      // .addDefaultCase((state, action) => {});
  }
);

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
