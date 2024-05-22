'use client';

import React, { ReactNode, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { Theme, lightTheme, darkTheme } from './theme';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem('darkMode') === 'true' ? darkTheme : lightTheme
  );

  useEffect(() => {
    Object.keys(theme).forEach((key) => {
      const themeKey = key as keyof Theme;
      document.documentElement.style.setProperty(
        `--${themeKey}`,
        theme[themeKey]
      );
    });
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <ThemeToggle onChangeTheme={changeTheme} />
      {children}
    </>
  );
}

export default ThemeProvider;
