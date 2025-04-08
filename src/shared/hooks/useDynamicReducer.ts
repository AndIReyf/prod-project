import { Reducer } from '@reduxjs/toolkit';
import { RootState, StoreWithManager } from 'app/providers/store/config/store';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from './reduxHooks';

export type ReducersList = {
  [key in keyof RootState]?: Reducer;
}

type ReducersListEntry = [key: keyof RootState, Reducer]

type UseDynamicReducer = (reducers: ReducersList, removeAfterUnmount?: boolean) => void;

export const useDynamicReducer: UseDynamicReducer = (reducers, removeAfterUnmount = true) => {
  const dispatch = useAppDispatch();
  const { reducerManager } = useStore() as StoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      reducerManager?.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
          reducerManager?.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  }, []);
};
