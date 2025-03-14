import {Route, Routes} from "react-router-dom";
import {JSX, Suspense} from "react";
import {routeConfig} from "shared/config";

export const AppRoute = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">{element}</div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  )
}