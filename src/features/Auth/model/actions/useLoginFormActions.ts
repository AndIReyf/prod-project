import { useAppDispatch } from 'shared/hooks';

import { loginActions } from '../slice/loginSlice';

export const useLoginFormActions = () => {
  const dispatch = useAppDispatch();

  const setUsername = (username: string) => dispatch(loginActions.setUsername(username));
  const setPassword = (password: string) => dispatch(loginActions.setPassword(password));

  return { setUsername, setPassword };
};
