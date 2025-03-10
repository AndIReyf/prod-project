import {JSX, ReactNode} from 'react';
import classes from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = ({className, children, theme = AppLinkTheme.PRIMARY, ...linkProps}: AppLinkProps): JSX.Element => {
  return (
    <Link
      {...linkProps}
      className={classNames({cls: classes.appLink, additional: [className, classes[theme]]})}
    >
      {children}
    </Link>
  )
}