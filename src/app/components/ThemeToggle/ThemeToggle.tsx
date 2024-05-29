'use client';

import React, { useState } from 'react';
import { Theme, lightTheme, darkTheme } from '../../hooks/theme';
import style from './ThemeToggle.module.css';

interface ThemeToggleProps {
  onChangeTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onChangeTheme }) => {
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(
  //   localStorage.getItem('darkMode') === 'true'
  // );

  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // if (typeof window !== 'undefined') {
  //   setIsDarkMode(localStorage.getItem('darkMode') === 'true');
  // }

  const toggleTheme = () => {
    const newTheme = isDarkMode ? lightTheme : darkTheme;
    setIsDarkMode(!isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', String(!isDarkMode));
    }
    onChangeTheme(newTheme);
  };

  return (
    <button className={style.toggleButton} onClick={toggleTheme}>
      {isDarkMode ? 'Світла тема' : 'Темна тема'}
    </button>
  );
};

export default ThemeToggle;
