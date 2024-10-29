import { NavLink } from "react-router-dom";

export default function BorderCountryList({ borderCountries }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {borderCountries.map((country) => (
        <NavLink
          to={`/country/${country.shortname.toLowerCase()}`}
          key={country.shortname.toLowerCase()}
        >
          <li className="flex min-w-24 items-center justify-center px-4 py-2 shadow-md">
            {country.name}
          </li>
        </NavLink>
      ))}
    </ul>
  );
}
