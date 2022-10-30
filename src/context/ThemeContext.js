import { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
   if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (typeof storedPrefs === "string") {
         return storedPrefs;
      }

      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
         return "dark";
      }
   }

   return "light"; // light theme as the default;
};

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
   const [theme, setTheme] = useState(getInitialTheme);

   const colorSetTheme = (colorTheme) => {
      const root = window.document.documentElement;
      const isDark = colorTheme === "dark";

      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(colorTheme);

      localStorage.setItem("color-theme", colorTheme);
   };

   useEffect(() => {
      colorSetTheme(theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {props.children}
      </ThemeContext.Provider>
   );
};
