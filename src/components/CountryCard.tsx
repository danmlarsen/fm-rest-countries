import { NavLink } from "react-router-dom";

export default function CountryCard({ country }) {
  const { name, flags, population, region, capital, cca2: cca } = country;

  return (
    <article className="min-h-[336px] w-[264px] overflow-hidden rounded-md bg-white shadow-lg">
      <div>
        <img
          className="h-[160px] w-full object-cover"
          src={flags.svg}
          alt={flags.alt}
        />
      </div>
      <div className="p-6">
        <NavLink to={`/country/${cca.toLowerCase()}`}>
          <h2 className="text-lg font-extrabold">{name.common}</h2>
        </NavLink>
        <div>
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital[0]}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
