import { classNames } from 'shared/lib';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames({ cls: classes.navbar, additional: [className] })}>
    <div className={classes.linksWrapper}>
      /
    </div>
  </div>
);
