import {JSX, useState} from 'react';
import {classNames} from 'shared/lib';
import classes from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle: VoidFunction = () => setCollapsed(prevState => !prevState);

  return (
    <div
      className={classNames({cls: classes.sidebar, additional: [className], mods: {[classes.collapsed]: collapsed}})}
    >
      <button onClick={toggle}>Toggle</button>
      <div className={classes.switchersWrapper}>
        <ThemeSwitcher/>
        <LanguageSwitcher/>
      </div>
    </div>
  )
}