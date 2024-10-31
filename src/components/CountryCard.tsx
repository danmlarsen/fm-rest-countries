import { NavLink } from "react-router-dom";
import { ICountryCardData } from "./CountryList";

type AppProps = {
  country: ICountryCardData;
};

export default function CountryCard({ country }: AppProps) {
  const { name, flags, population, region, capital, cca2: cca } = country;

  return (
    <NavLink to={`/country/${cca.toLowerCase()}`}>
      <article className="min-h-[336px] w-[264px] overflow-hidden rounded-md bg-white text-sm shadow-lg dark:bg-blue-500">
        <div>
          <img
            className="h-[160px] w-full object-cover"
            src={flags.svg}
            alt={flags.alt}
          />
        </div>
        <div className="space-y-4 p-6">
          <h2 className="text-lg font-extrabold">{name.common}</h2>

          <div>
            <p>
              <span className="font-semibold">Population: </span>
              <span className="font-light">
                {new Intl.NumberFormat().format(+population)}
              </span>
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              <span className="font-light">{region}</span>
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              <span className="font-light">{capital?.[0]}</span>
            </p>
          </div>
        </div>
      </article>
    </NavLink>
  );
}
