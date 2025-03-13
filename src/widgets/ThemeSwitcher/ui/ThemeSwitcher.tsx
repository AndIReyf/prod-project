import {JSX} from 'react';
import classes from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib";
import ThemeSwitcherIcon from 'shared/assets/icons/ThemeSwitcherIcon.svg';
import {Button} from "shared/ui";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps): JSX.Element => {
  const {toggleTheme} = useTheme();

  return (
    <Button className={classNames({cls: classes.themeSwitcher, additional: [className]})} onClick={toggleTheme}>
      <ThemeSwitcherIcon />
    </Button>
  )
}