import React, { createContext, useState, ReactNode } from 'react';

const defaultTheme = {
  theme: {
    backgroundColor: '#F2F2F2',
    textColor: '#202C36',
  },
  toggleTheme: () => {},
  cardTheme: () => {},
};

export const ThemeContext = createContext(defaultTheme);

interface ThemeProviderProps {
  children: ReactNode; 
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: '#F2F2F2',
    textColor: '#202C36',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === '#F2F2F2' ? '#202C36' : '#F2F2F2',
      textColor: prevTheme.textColor === '#202C36' ? '#F2F2F2' : '#202C36',     
    }));
  };

  const cardTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === '#FFFFFF' ? '#2B3844' : '#FFFFFF',
      textColor: prevTheme.textColor === '#202C36' ? '#111517' : '#202C36',     
        
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, cardTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
