import CountryCard from "./CountryCard";
import { useSearchParams } from "react-router-dom";
import { ICountryName } from "../pages/Country";
import {
  filterByCountryName,
  filterByRegion,
  sortTopCountries,
} from "../utils/utils";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionCount } from "../hooks/useIntersectionCount";
import { PAGE_SIZE } from "../utils/constants";

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
      // when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export default function CountryList({
  countries,
}: {
  countries: ICountryCardData[];
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  const maxPages = Math.floor(countries.length / PAGE_SIZE);
  const bottomIntersectionCount = useIntersectionCount(bottomRef, maxPages);

  const [searchParams] = useSearchParams();

  const sortedCountries = sortTopCountries(countries);

  const visibleCountries = sortedCountries?.slice(
    0,
    bottomIntersectionCount * PAGE_SIZE + PAGE_SIZE,
  );

  let filteredCountries = visibleCountries;
  if (filteredCountries) {
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

  return (
    <>
      <motion.div
        layoutScroll
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(16.5rem,1fr))] justify-items-center gap-10 lg:gap-[4.625rem]"
      >
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </motion.div>
      <div ref={bottomRef}></div>
    </>
  );
}
