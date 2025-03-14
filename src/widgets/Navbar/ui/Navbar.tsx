import {RoutePath} from "shared/config";
import {JSX} from "react";
import {classNames} from "shared/lib";
import classes from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps): JSX.Element => {
  return (
    <div className={classNames({cls: classes.navbar, additional: [className]})}>
      <div className={classes.linksWrapper}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={classes.link}>Main Page</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={classes.link}>About</AppLink>
      </div>
    </div>
  )
}
