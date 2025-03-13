import {JSX, ReactNode, ButtonHTMLAttributes} from 'react';
import classes from './Button.module.scss';
import {classNames} from "shared/lib";

enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
}

export const Button = ({children, className, theme = ThemeButton.CLEAR, ...btnProps}: ButtonProps): JSX.Element => {
  return (
    <button
      {...btnProps}
      className={classNames({cls: classes.button, additional: [className, classes[theme]]})}
    >
      {children}
    </button>
  )
}