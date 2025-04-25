import { render } from '@testing-library/react';
import { RootState, StoreProvider } from 'app/providers/store';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { i18n } from 'shared/config/i18n/i18n';
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
    <MemoryRouter initialEntries={[router]}>
      <StoreProvider preloadedStore={preloadedStore}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  )
);
