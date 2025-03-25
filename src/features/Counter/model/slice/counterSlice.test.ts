import { RootState } from 'app/providers/store';

import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('State should be increment', () => {
    const state: RootState['counter'] = {
      count: 0,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({ count: 1 });
  });

  test('State should be reset', () => {
    const state: RootState['counter'] = {
      count: 1,
    };

    expect(counterReducer(state, counterActions.reset())).toEqual({ count: 0 });
  });

  test('Default State', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ count: 1 });
    expect(counterReducer(undefined, counterActions.reset())).toEqual({ count: 0 });
  });
});
