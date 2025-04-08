import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { api, loginReducer } from 'features/Auth';
import { counterReducer } from 'features/Counter/model/slice/counterSlice';

import { createReducerManager } from './reducerManager';

interface ReducersMap {
  counter: typeof counterReducer,
  user: typeof userReducer,
  [api.reducerPath]: typeof api.reducer,

  // Dynamic reducers
  login?: typeof loginReducer,
}

const reducersMap: ReducersMap = {
  counter: counterReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
};

export const reducer = combineReducers(reducersMap);

export type RootState = ReturnType<typeof reducer>;

const reducerManager = createReducerManager(reducersMap);

type ReducerManager = ReturnType<typeof createReducerManager>;

export function createReduxStore(preloadedState?: RootState) {
  return configureStore({
    reducer: reducerManager.reduce,
    preloadedState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  });
}

export const store = createReduxStore();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
store.reducerManager = reducerManager;
export type AppDispatch = typeof store.dispatch;
export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReducerManager;
}
