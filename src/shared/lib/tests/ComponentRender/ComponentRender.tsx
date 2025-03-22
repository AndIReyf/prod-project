import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface ComponentRenderProps {
  router?: string;
  component: ReactNode
}

export const ComponentRender = ({ component, router = '/' }: ComponentRenderProps) => (
  render(
    <MemoryRouter initialEntries={[router]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  )
);
