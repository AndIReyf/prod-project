import { RootState } from 'app/providers/store';

export const getCounter = ({ counter }: RootState) => counter.count;
