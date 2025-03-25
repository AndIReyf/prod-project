import { render } from '@testing-library/react';
import { RootState, StoreProvider } from 'app/providers/store';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { DeepPartial } from 'shared/types/data';

interface ComponentRenderProps {
  router?: string;
  preloadedStore?: DeepPartial<RootState>;
  component: ReactNode
}

export const ComponentRender = ({
  component,
  router = '/',
  preloadedStore,
}: ComponentRenderProps) => (
  render(
    <StoreProvider preloadedStore={preloadedStore}>
      <MemoryRouter initialEntries={[router]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  )
);
