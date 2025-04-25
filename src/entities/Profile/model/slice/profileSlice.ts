import { createSlice } from '@reduxjs/toolkit';

import { IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  data: undefined,
  error: '',
  isLoading: false,
  readonly: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
});

export const {
  reducer: profileReducer,
  actions: profileActions,
} = profileSlice;
