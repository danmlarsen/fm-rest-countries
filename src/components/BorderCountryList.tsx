import { NavLink } from "react-router-dom";

import { IBorderCountry } from "../pages/Country";
import { motion } from "framer-motion";

type AppProps = {
  borderCountries: IBorderCountry[];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function BorderCountryList({ borderCountries }: AppProps) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap gap-3"
    >
      {borderCountries.map((country) => (
        <motion.li key={country.shortname} variants={item}>
          <NavLink
            className="flex min-w-24 items-center justify-center px-4 py-2 shadow-md transition duration-300 hover:-translate-y-1"
            to={`/country/${country.shortname.toLowerCase()}`}
          >
            {country.name}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
}
