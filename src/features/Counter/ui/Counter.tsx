import { useCounterActions } from 'features/Counter/model/actions/useCounterActions';
import { getCounter } from 'features/Counter/model/selectors/countSelector/getCounter';
import { useAppSelector } from 'shared/hooks';

export const Counter = () => {
  const value = useAppSelector(getCounter);
  const { increment, reset } = useCounterActions();

  return (
    <div>
      <button
        data-testid="reset-btn"
        type="button"
        disabled={value === 0}
        onClick={reset}
      >
        reset
      </button>
      <button
        data-testid="increment-btn"
        type="button"
        onClick={increment}
      >
        +
      </button>
      <span data-testid="counter-value" style={{ marginLeft: 10 }}>{value}</span>
    </div>
  );
};
