import { useTheme } from 'app/providers/ThemeProvider';
import { JSX } from 'react';
import ThemeSwitcherIcon from 'shared/assets/icons/ThemeSwitcherIcon.svg';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classNames({ cls: classes.themeSwitcher, additional: [className] })}
      onClick={toggleTheme}
    >
      <ThemeSwitcherIcon />
    </Button>
  );
};
