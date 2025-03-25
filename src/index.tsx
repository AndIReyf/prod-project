import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageErrorBoundary } from 'widgets/PageErrorBoundary';
import 'shared/config/i18n/i18n';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary fallback={<PageErrorBoundary />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
