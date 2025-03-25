import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const {
  reducer: counterReducer,
  actions: counterActions,
} = counterSlice;
