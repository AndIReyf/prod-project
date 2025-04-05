import { RootState } from 'app/providers/store';

export const getUserAuthDataSelectors = ({ user }: RootState) => user.authData;
