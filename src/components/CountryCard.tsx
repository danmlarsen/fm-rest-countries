import { NavLink } from "react-router-dom";
import { ICountryCardData } from "./CountryList";
import { motion } from "framer-motion";

type AppProps = {
  country: ICountryCardData;
};

const itemVariant = {
  hidden: { opacity: 0, y: "20px" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function CountryCard({ country }: AppProps) {
  const { name, flags, population, region, capital, cca2: cca } = country;

  return (
    <motion.article
      layout
      variants={itemVariant}
      className="min-h-[21rem] w-[16.5rem] overflow-hidden rounded-md bg-white text-sm shadow-md ring-offset-4 has-[:focus-visible]:ring-2 dark:bg-blue-500"
    >
      <NavLink
        className="block h-full focus:outline-none"
        to={`/country/${cca.toLowerCase()}`}
      >
        <div>
          <img
            className="h-[160px] w-full object-cover"
            src={flags.svg}
            alt={flags.alt}
          />
        </div>
        <div className="space-y-3 p-6">
          <h2 className="text-lg font-extrabold">{name.common}</h2>

          <div className="space-y-1">
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
      </NavLink>
    </motion.article>
  );
}
