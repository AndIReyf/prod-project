import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';

import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames({ cls: classes.pageLoader, additional: [className] })}>
    <Loader />
  </div>
);
