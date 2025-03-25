import { RootState } from 'app/providers/store';
import { DeepPartial } from 'shared/types/data';

import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('getCounter should return the correct value', () => {
    const state: DeepPartial<RootState> = {
      counter: { count: 0 },
    };
    expect(getCounter(state as RootState)).toEqual(0);
  });
});
