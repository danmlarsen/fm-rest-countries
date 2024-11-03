import { useContext } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <button
      className="flex items-center gap-2 transition duration-300 focus:outline-none focus-visible:ring-2 dark:ring-white"
      onClick={toggleTheme}
    >
      <HiOutlineMoon className="size-5 text-blue-500 dark:text-white" />
      <span className="font-semibold">Dark Mode</span>
    </button>
  );
}
