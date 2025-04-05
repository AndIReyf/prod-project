import { createReduxStore, RootState } from 'app/providers/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from 'shared/types/data';

interface StoreProviderProps {
  preloadedStore?: DeepPartial<RootState>;
}

export const StoreProvider = ({
  children,
  preloadedStore,
}: PropsWithChildren<StoreProviderProps>) => {
  const store = createReduxStore(preloadedStore as RootState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
