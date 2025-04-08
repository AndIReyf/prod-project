import { RootState } from 'app/providers/store';

export const getUsername = ({ login }: RootState) => login?.username;
export const getPassword = ({ login }: RootState) => login?.password;
export const getIsAuthDataLoading = ({ login }: RootState) => login?.isLoading;
export const getAuthDataError = ({ login }: RootState) => login?.error;
