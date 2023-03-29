import React, { useState, useEffect, useContext } from "react";

const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
