import {defaultTheme, Theme, ThemeContext} from "./ThemeContext";
import {useState, JSX, ReactNode} from "react";

export const ThemeProvider = ({children}: { children: ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext value={{theme, setTheme}}>
      {children}
    </ThemeContext>
  )
}