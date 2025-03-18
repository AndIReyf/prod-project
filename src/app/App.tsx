import './styles/index.scss';
import { AppRoute } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames({ cls: 'app', additional: [theme] })}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRoute />
        </div>
      </Suspense>
    </div>
  );
};
