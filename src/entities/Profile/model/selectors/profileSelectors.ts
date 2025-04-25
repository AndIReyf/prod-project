import { RootState } from 'app/providers/store';
import { IProfileSchema } from 'entities/Profile';

export const getProfileDataSelectors = ({ profile }: RootState) => (profile as unknown as IProfileSchema)?.data;
