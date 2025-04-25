import { RootState } from 'app/providers/store';
import { LoginSchema } from 'features/Auth/model/types/loginSchema';

export const getUsername = ({ login } : RootState) => (login as unknown as LoginSchema)?.username;
export const getPassword = ({ login }: RootState) => (login as unknown as LoginSchema)?.password;
export const getIsAuthDataLoading = ({ login }: RootState) => (login as unknown as LoginSchema)?.isLoading;
export const getAuthDataError = ({ login }: RootState) => (login as unknown as LoginSchema)?.error;
