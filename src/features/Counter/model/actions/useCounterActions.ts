import { counterActions } from 'features/Counter/model/slice/counterSlice';
import { useAppDispatch } from 'shared/hooks';

export const useCounterActions = () => {
  const dispatch = useAppDispatch();

  const reset = () => dispatch(counterActions.reset());
  const increment = () => dispatch(counterActions.increment());

  return { reset, increment };
};
