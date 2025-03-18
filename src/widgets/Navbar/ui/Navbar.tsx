import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames({ cls: classes.navbar, additional: [className] })}>
      <div className={classes.linksWrapper}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={classes.link}
        >
          {t('pages.main')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={classes.link}
        >
          {t('pages.about')}
        </AppLink>
      </div>
    </div>
  );
};
