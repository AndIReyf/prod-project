import { createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: profileReducer,
  actions: profileActions,
} = profileSlice;
