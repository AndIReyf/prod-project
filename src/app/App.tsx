import './styles/index.scss';
import { AppRoute } from 'app/providers/router';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useUserActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useBodyClass } from 'shared/hooks';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();
  const { initAuthData } = useUserActions();
  useBodyClass(theme, theme === Theme.DARK);

  useEffect(() => {
    initAuthData();
  }, []);

  return (
    <Suspense fallback="">
      <div className="app">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRoute />
        </div>
      </div>
    </Suspense>
  );
};
