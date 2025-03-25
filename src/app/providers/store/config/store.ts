import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'features/Counter/model/slice/counterSlice';

const reducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof reducer>;

export function createReduxStore(preloadedState?: RootState) {
  return configureStore({
    reducer,
    preloadedState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
}

export const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;
