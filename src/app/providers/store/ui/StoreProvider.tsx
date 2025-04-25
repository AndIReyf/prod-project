import { createReduxStore, RootState } from 'app/providers/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeepPartial } from 'shared/types/data';

import { ReducersMap } from '../types/storeTypes';

interface StoreProviderProps {
  preloadedStore?: DeepPartial<RootState>;
  dynamicReducers?: DeepPartial<ReducersMap>;
}

export const StoreProvider = ({
  children,
  preloadedStore,
  dynamicReducers,
}: PropsWithChildren<StoreProviderProps>) => {
  const navigate = useNavigate();
  const store = createReduxStore(
    preloadedStore as RootState,
    dynamicReducers as ReducersMap,
    navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
