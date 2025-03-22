import { ButtonGetMockError } from 'features/ButtonGetMockError';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import { RoutePath } from 'shared/config';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme, Button } from 'shared/ui';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
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
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={classes.link}
        >
          <HomeIcon />
          <span>{t('pages.main')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={classes.link}
        >
          <AboutIcon />
          <span>{t('pages.about')}</span>
        </AppLink>
      </div>
      <ButtonGetMockError />
      <div className={classes.switchersWrapper}>
        <ThemeSwitcher />
        <LanguageSwitcher className={classes.lang} shortLanguage={collapsed} />
      </div>
    </div>
  );
};
