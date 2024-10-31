import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="grid min-h-20 bg-white shadow-md dark:bg-blue-500">
      <div className="px-7">
        <div className="mx-auto flex h-full max-w-7xl grow items-center justify-between">
          <Logo />
          <div>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
