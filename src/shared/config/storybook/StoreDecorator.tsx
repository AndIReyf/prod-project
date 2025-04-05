import { configureStore } from '@reduxjs/toolkit';
import type { Decorator } from '@storybook/react';
import { RootState } from 'app/providers/store';
import { reducer } from 'app/providers/store/config/store';
import { Provider } from 'react-redux';

declare module '@storybook/react' {
  interface Parameters {
    redux?: {
      preloadedState?: Partial<RootState>;
      store?: ReturnType<typeof configureStore>;
    };
  }
}

export const StoreDecorator: Decorator = (Story, { parameters }) => {
  const store = parameters.redux?.store || configureStore({
    reducer,
    preloadedState: parameters.redux?.preloadedState,
  });

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
