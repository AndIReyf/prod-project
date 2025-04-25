import { EnhancedStore } from '@reduxjs/toolkit';
import { profileReducer } from 'entities/Profile';
import { userReducer } from 'entities/User';
import { api, loginReducer } from 'features/Auth';
import { counterReducer } from 'features/Counter/model/slice/counterSlice';
import { NavigateFunction } from 'react-router';
import { $axios } from 'shared/api/api';

import { createReducerManager } from '../../store/config/reducerManager';
import { createReduxStore, reducer } from '../../store/config/store';

export interface ThunkExtraArgument {
  api: typeof $axios;
  navigate?: NavigateFunction;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgument;
}

export interface ReducersMap {
  counter: typeof counterReducer,
  user: typeof userReducer,
  [api.reducerPath]: typeof api.reducer,

  // Dynamic reducers
  login?: typeof loginReducer,
  profile?: typeof profileReducer,
}

export type RootState = ReturnType<typeof reducer>;

type ReducerManager = ReturnType<typeof createReducerManager>;
export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReducerManager;
}

type ReduxStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = ReduxStore['dispatch'];
