import { useAppDispatch } from 'shared/hooks';

import { userActions } from '../slice/userSlice';

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const logout: VoidFunction = () => dispatch(userActions.logout());
  const initAuthData: VoidFunction = () => dispatch(userActions.initAuthData());

  return { logout, initAuthData };
};
