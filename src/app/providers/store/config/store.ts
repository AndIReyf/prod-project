import {
  combineReducers, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { api } from 'features/Auth';
import { counterReducer } from 'features/Counter/model/slice/counterSlice';
import { NavigateFunction } from 'react-router/dist/development';
import { $axios } from 'shared/api/api';

import {
  ReducersMap, RootState, StoreWithManager, ThunkExtraArgument,
} from '../types/storeTypes';

import { createReducerManager } from './reducerManager';

const reducersMap: ReducersMap = {
  counter: counterReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
};

export const reducer = combineReducers(reducersMap);

export function createReduxStore(
  preloadedState?: RootState,
  dynamicReducers?: ReducersMap,
  navigate?: NavigateFunction,
) {
  const initialReducers = { ...reducersMap, ...dynamicReducers } as ReducersMapObject<RootState>;
  const reducerManager = createReducerManager(initialReducers);

  const extraArgument:ThunkExtraArgument = {
    api: $axios,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<RootState>,
    preloadedState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument,
      },
    }).concat(api.middleware),
  });

  (store as StoreWithManager).reducerManager = reducerManager;

  return store;
}
