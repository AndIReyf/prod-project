import { ReactNode, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';

import classes from './Button.module.scss';

enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
}

export const Button = ({
  children, className, theme = ThemeButton.CLEAR, ...btnProps
}: ButtonProps) => (
  <button
    type="button"
    {...btnProps}
    className={classNames({ cls: classes.button, additional: [className, classes[theme]] })}
  >
    {children}
  </button>
);
