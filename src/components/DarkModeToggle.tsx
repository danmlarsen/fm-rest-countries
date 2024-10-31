import { useEffect, useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="flex items-center gap-2"
      onClick={() => setDark((prev) => !prev)}
    >
      <HiOutlineMoon className="size-5 text-blue-500 dark:text-white" />
      <span className="font-semibold">Dark Mode</span>
    </button>
  );
}
