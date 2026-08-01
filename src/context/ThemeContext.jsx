import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
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

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      theme: 'blue',
      changeTheme: (t) => {
        document.body.classList.remove('theme-blue', 'theme-highlighter', 'theme-tangerine');
        document.body.classList.add(`theme-${t}`);
        localStorage.setItem('user-theme', t);
      }
    };
  }
  return context;
}
