import { createReduxStore, RootState } from 'app/providers/store';
import { JSX, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from 'shared/types/data';

interface StoreProviderProps {
  children: ReactNode;
  preloadedStore?: DeepPartial<RootState>;
}

export const StoreProvider = ({ children, preloadedStore }: StoreProviderProps): JSX.Element => {
  const store = createReduxStore(preloadedStore as RootState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
