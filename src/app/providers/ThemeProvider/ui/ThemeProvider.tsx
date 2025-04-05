import { PropsWithChildren, useState } from 'react';

import { defaultTheme, Theme, ThemeContext } from '../lib/ThemeContext';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext value={{ theme, setTheme }}>
      {children}
    </ThemeContext>
  );
};
