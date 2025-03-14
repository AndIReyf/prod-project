import './styles/index.scss';
import {JSX, Suspense} from 'react'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib";
import {AppRoute} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export const App = (): JSX.Element => {
  const {theme} = useTheme();

  return (
    <div className={classNames({cls: 'app', additional: [theme]})}>
      <Suspense fallback="Loading...">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRoute/>
        </div>
      </Suspense>
    </div>
  )
}