import React, { createContext, useState, ReactNode } from 'react';

const defaultTheme = {
  theme: {
    backgroundColor: '#FFFFFF',
    textColor: '#111517',
  },
  toggleTheme: () => {},
};

export const BordersButtonContext = createContext(defaultTheme);

interface ThemeProviderProps {
  children: ReactNode; 
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: '#FFFFFF',
    textColor: '#111517',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === '#FFFFFF' ? '#111517' : '#FFFFFF',
      textColor: prevTheme.textColor === '#111517' ? '#FFFFFF' : '#111517',
    }));
  };

  return (
    <BordersButtonContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BordersButtonContext.Provider>
  );
};
