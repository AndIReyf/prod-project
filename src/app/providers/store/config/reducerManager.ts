import {
  Action, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { RootState } from './store';

type RootStateKey = keyof RootState;

interface CreateReducerManagerReturn {
  getReducerMap: () => ReducersMapObject<RootState>;
  reduce: (state: RootState, action: Action) => RootState;
  add: (key: RootStateKey, reducer: Reducer) => void;
  remove: (key: RootStateKey) => void;
}

type CreateReducerManager = (initialReducers: ReducersMapObject<RootState>) => CreateReducerManagerReturn;

export const createReducerManager: CreateReducerManager = (initialReducers) => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: RootStateKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
};
