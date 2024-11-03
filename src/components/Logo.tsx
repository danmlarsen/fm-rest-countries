import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="transition duration-300 focus:outline-none focus-visible:ring dark:ring-white"
    >
      <h1 className="text-sm font-extrabold sm:text-2xl">
        Where in the world?
      </h1>
    </NavLink>
  );
}
