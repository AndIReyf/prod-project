import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'features/Counter/model/slice/counterSlice';

interface RootState {
  counter: ReturnType<typeof counterReducer>;
}

export function createReduxStore(
  preloadedState?: RootState,
) {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState,
  });
}
