import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';

import { SidebarItemsConfig } from '../../model/sidebarItemsConfig';

import classes from './SidebarItems.module.scss';

export interface SidebarItemsProps extends SidebarItemsConfig {
  collapsed?: boolean;
}

export const SidebarItems = ({
  label, icon, to, collapsed,
}: SidebarItemsProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={to}
      theme={AppLinkTheme.SECONDARY}
      className={classNames({
        cls: classes.link,
        mods: { [classes.collapsed]: collapsed },
      })}
    >
      {icon && icon}
      {label && <span className={classes.label}>{t(label)}</span>}
    </AppLink>
  );
};
