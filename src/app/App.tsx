import './styles/index.scss';
import {JSX} from 'react'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib";
import {AppRoute} from "app/providers/router";

export const App = (): JSX.Element => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About</Link>
      <AppRoute/>
    </div>
  )
}