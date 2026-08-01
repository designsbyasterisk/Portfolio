import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('user-theme') || 'blue';
  });

  useEffect(() => {
    document.body.classList.remove('theme-blue', 'theme-highlighter', 'theme-tangerine');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { theme, changeTheme };
}
