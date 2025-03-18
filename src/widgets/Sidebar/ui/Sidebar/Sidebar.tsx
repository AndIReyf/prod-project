import { ButtonGetMockError } from 'features/ButtonGetMockError';
import { useState } from 'react';
import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle: VoidFunction = () => setCollapsed((prevState) => !prevState);

  return (
    <div
      className={classNames({
        cls: classes.sidebar,
        additional: [className],
        mods: { [classes.collapsed]: collapsed },
      })}
    >
      <Button theme={ThemeButton.OUTLINED} onClick={toggle}>Toggle</Button>
      <ButtonGetMockError />
      <div className={classes.switchersWrapper}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
