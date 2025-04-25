import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/store';
import { User, userActions } from 'entities/User';
import { LOGIN_NOTIFICATION } from 'features/Auth/model/constants/loginNotification';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { getNotification } from 'shared/lib';

interface LoginByUserNameStateProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameStateProps, IThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.post<User>('/login', authData);

      if (!data) {
        getNotification('error', LOGIN_NOTIFICATION.warning);
        throw new Error(LOGIN_NOTIFICATION.warning);
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setAuthData(data));
      getNotification('success', LOGIN_NOTIFICATION.success);

      return data;
    } catch (e) {
      console.error(e);
      getNotification('error', LOGIN_NOTIFICATION.error);
      return rejectWithValue('Login error');
    }
  },
);
