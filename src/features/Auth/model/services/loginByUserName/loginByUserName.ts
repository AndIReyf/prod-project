import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOGIN_NOTIFICATION } from 'features/Auth/model/constants/loginNotification';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { getNotification } from 'shared/lib';

interface LoginByUserNameStateProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameStateProps, {rejectValue: string}>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const { data } = await axios.post<User>('http://localhost:8000/login', authData);

      if (!data) {
        getNotification('error', LOGIN_NOTIFICATION.warning);
        throw new Error(LOGIN_NOTIFICATION.warning);
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      thunkAPI.dispatch(userActions.setAuthData(data));
      getNotification('success', LOGIN_NOTIFICATION.success);

      return data;
    } catch (e) {
      console.error(e);
      console.log('LOGIN_NOTIFICATION.error', LOGIN_NOTIFICATION.error);
      getNotification('error', LOGIN_NOTIFICATION.error);
      return thunkAPI.rejectWithValue('Login error');
    }
  },
);
