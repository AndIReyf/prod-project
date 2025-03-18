import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  className, children, theme = AppLinkTheme.PRIMARY, ...linkProps
}: AppLinkProps) => (
  <Link
    {...linkProps}
    className={classNames({ cls: classes.appLink, additional: [className, classes[theme]] })}
  >
    {children}
  </Link>
);
