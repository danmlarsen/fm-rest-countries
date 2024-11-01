import { useQuery } from "@tanstack/react-query";
import CountryCard from "./CountryCard";
import { getCountries } from "../services/apiRestCountries";
import { useSearchParams } from "react-router-dom";
import { ICountryName } from "../pages/Country";
import {
  filterByCountryName,
  filterByRegion,
  sortTopCountries,
} from "../utils/utils";
import { motion } from "framer-motion";

export interface ICountryCardData {
  name: ICountryName;
  flags: { svg: string; png: string; alt: string };
  population: string;
  region: string;
  capital: string;
  cca2: string;
}

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export default function CountryList() {
  const {
    data: countries,
    // isLoading,
    // error,
  } = useQuery<ICountryCardData[]>({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const [searchParams] = useSearchParams();

  let filteredCountries = countries;

  if (filteredCountries) {
    filteredCountries = sortTopCountries(filteredCountries);

    if (searchParams.get("region"))
      filteredCountries = filterByRegion(
        filteredCountries,
        searchParams.get("region")!,
      );

    if (searchParams.get("country"))
      filteredCountries = filterByCountryName(
        filteredCountries,
        searchParams.get("country")!,
      );
  }

  if (!filteredCountries) return null;

  return (
    <motion.div
      layoutScroll
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] justify-items-center gap-10 lg:gap-[74px]"
    >
      {filteredCountries.map((country) => (
        <CountryCard key={country.cca2} country={country} />
      ))}
    </motion.div>
  );
}
