import { ButtonGetMockError } from 'features/ButtonGetMockError';
import { useState } from 'react';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { sidebarItemsConfig } from '../../model/sidebarItemsConfig';
import { SidebarItems } from '../../ui/SidebarItems/SidebarItems';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle: VoidFunction = () => setCollapsed((prevState) => !prevState);

  return (
    <div
      data-testid="sidebar"
      className={classNames({
        cls: classes.sidebar,
        additional: [className],
        mods: { [classes.collapsed]: collapsed },
      })}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggle}
        className={classes.sidebarToggleBtn}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.sidebarItems}>
        {
          sidebarItemsConfig.map(({ to, icon, label }) => (
            <SidebarItems key={to} to={to} label={label} icon={icon} collapsed={collapsed} />
          ))
        }
      </div>
      <ButtonGetMockError />
      <div className={classes.switchersWrapper}>
        <ThemeSwitcher />
        <LanguageSwitcher className={classes.lang} shortLanguage={collapsed} />
      </div>
    </div>
  );
};
