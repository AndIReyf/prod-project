import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { api, loginReducer } from 'features/Auth';
import { counterReducer } from 'features/Counter/model/slice/counterSlice';

import { createReducerManager } from './reducerManager';

export interface ReducersMap {
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

type ReducerManager = ReturnType<typeof createReducerManager>;
export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReducerManager;
}

export function createReduxStore(preloadedState?: RootState, dynamicReducers?: ReducersMap) {
  const reducerManager = createReducerManager({ ...dynamicReducers, ...reducersMap });

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { dispatch } = createReduxStore();
export type AppDispatch = typeof dispatch;
