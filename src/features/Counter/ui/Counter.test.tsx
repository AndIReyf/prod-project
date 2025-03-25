import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib';

import { Counter } from './Counter';

describe('Counter', () => {
  test('First render', () => {
    ComponentRender({ component: <Counter />, preloadedStore: { counter: { count: 1 } } });
    const valueElement = screen.getByTestId('counter-value');
    expect(valueElement).toHaveTextContent('1');
  });

  test('Increment', () => {
    ComponentRender({ component: <Counter />, preloadedStore: { counter: { count: 1 } } });
    const incrementBtn = screen.getByTestId('increment-btn');
    const valueElement = screen.getByTestId('counter-value');

    fireEvent.click(incrementBtn);

    expect(valueElement).toHaveTextContent('2');
  });

  test('Reset', () => {
    ComponentRender({ component: <Counter />, preloadedStore: { counter: { count: 1 } } });
    const resetBtn = screen.getByTestId('reset-btn');
    const valueElement = screen.getByTestId('counter-value');

    fireEvent.click(resetBtn);

    expect(valueElement).toHaveTextContent('0');
  });
});
