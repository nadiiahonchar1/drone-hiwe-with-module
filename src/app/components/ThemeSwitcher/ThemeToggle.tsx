'use client';

import React, { useState } from 'react';
import { Theme, lightTheme, darkTheme } from '../../hooks/theme';

interface ThemeToggleProps {
  onChangeTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onChangeTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem('darkMode') === 'true'
  );

  const toggleTheme = () => {
    const newTheme = isDarkMode ? lightTheme : darkTheme;
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', String(!isDarkMode));
    onChangeTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
