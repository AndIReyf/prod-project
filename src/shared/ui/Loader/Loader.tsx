import { classNames } from 'shared/lib';

import classes from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames({ cls: classes.ldsEllipsis, additional: [className] })}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
