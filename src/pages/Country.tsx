import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import CountryDetails from "../components/CountryDetails";
import BackButton from "../components/BackButton";

export interface ICountryName {
  common: string;
  nativeName: {
    _: {
      common: string;
    };
  };
}

export interface ICountryData {
  name: ICountryName;
  flags: { svg: string; png: string; alt: string };
  population: string;
  region: string;
  subregion: string;
  capital: string;
  tld: [string];
  currencies: object;
  languages: object;
  borders: [IBorderCountry];
}

export interface IBorderCountry {
  name: string;
  shortname: string;
}

export default function Country() {
  const navigate = useNavigate();

  return (
    <motion.article
      key="Country"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16 md:space-y-20"
    >
      <div>
        <BackButton onClick={() => navigate("/")} />
      </div>
      <div>
        <CountryDetails />
      </div>
    </motion.article>
  );
}
