import { Reducer } from '@reduxjs/toolkit';
import { RootState, StoreWithManager } from 'app/providers/store';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from './reduxHooks';

export type ReducersList = {
  [key in keyof RootState]?: Reducer;
}

type UseDynamicReducer = (reducers: ReducersList, removeAfterUnmount?: boolean) => void;

export const useDynamicReducer: UseDynamicReducer = (reducers, removeAfterUnmount = true) => {
  const dispatch = useAppDispatch();
  const { reducerManager } = useStore() as StoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      reducerManager?.add(key as keyof RootState, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          reducerManager?.remove(key as keyof RootState);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  }, []);
};
