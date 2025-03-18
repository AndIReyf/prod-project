import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { PageErrorBoundary } from 'widgets/PageErrorBoundary';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageErrorBoundary />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
