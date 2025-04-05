import { Maybe } from 'shared/types/data';

export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: Maybe<string>;
}
