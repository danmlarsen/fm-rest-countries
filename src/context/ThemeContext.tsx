import { createContext, useEffect, useState } from "react";

export type ThemeContextType = {
  theme: string | null;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  function toggleTheme() {
    setTheme((prev) => (prev === "" || prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    if (theme) window.localStorage.setItem("theme", theme);
    else window.localStorage.removeItem("theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
