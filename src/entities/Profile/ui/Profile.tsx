import { classNames } from 'shared/lib';

import classes from './Profile.module.scss';

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => (
  <div className={classNames({ cls: classes.profile, additional: [className] })} />
);
