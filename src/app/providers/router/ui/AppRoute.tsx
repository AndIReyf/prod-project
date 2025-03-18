import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets/PageLoader';

export const AppRoute = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={(
          <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
              {element}
            </Suspense>
          </div>
        )}
      />
    ))}
  </Routes>
);
