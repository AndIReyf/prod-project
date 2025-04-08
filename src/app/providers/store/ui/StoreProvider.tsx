import { createReduxStore, RootState } from 'app/providers/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from 'shared/types/data';

import { ReducersMap } from '../config/store';

interface StoreProviderProps {
  preloadedStore?: DeepPartial<RootState>;
  dynamicReducers?: DeepPartial<ReducersMap>;
}

export const StoreProvider = ({
  children,
  preloadedStore,
  dynamicReducers,
}: PropsWithChildren<StoreProviderProps>) => {
  const store = createReduxStore(
    preloadedStore as RootState,
    dynamicReducers as ReducersMap,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
