import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/store';
import { getNotification } from 'shared/lib';

import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IProfile>('/profile');

      if (!data) {
        getNotification('error');
        throw new Error();
      }

      getNotification('success');

      return data;
    } catch (e) {
      console.error(e);
      getNotification('error');
      return rejectWithValue('Login error');
    }
  },
);
