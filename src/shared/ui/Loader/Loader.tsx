import { classNames } from 'shared/lib';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames({ cls: 'lds-ellipsis', additional: [className] })}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
