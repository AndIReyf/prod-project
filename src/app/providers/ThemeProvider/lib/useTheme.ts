import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeReturn {
  toggleTheme: VoidFunction;
  theme: Theme;
}

export const useTheme = (): UseThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme: VoidFunction = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { toggleTheme, theme: theme || Theme.DARK };
};
