import { useState, useEffect } from "react";

const LOCAL_STORAGE_THEME_KEY = "theme";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };

  const isDarkTheme = theme === "dark";

  return {
    onToggleTheme,
    isDarkTheme,
  };
};

export default useTheme;
