import './styles/index.scss';
import {JSX} from 'react'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib";
import {AppRoute} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

export const App = (): JSX.Element => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames({cls: 'app', additional: [theme]})}>
      <Navbar/>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRoute/>
    </div>
  )
}