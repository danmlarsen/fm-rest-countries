import Logo from "./Logo";

export default function Header() {
  return (
    <header className="mb-12 grid min-h-20 bg-white shadow-md">
      <div className="px-7">
        <div className="mx-auto flex h-full max-w-7xl grow items-center justify-between">
          <Logo />
          <div>DARK TOGGLE</div>
        </div>
      </div>
    </header>
  );
}
