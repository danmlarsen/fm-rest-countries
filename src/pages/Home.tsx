import { useEffect, useState } from "react";

import CountryList from "../components/CountryList";
import CountrySearch from "../components/CountrySearch";
import RegionFilter from "../components/RegionFilter";
import { ICountryName } from "./Country";

export interface ICountryCardData {
  name: ICountryName;
  flags: { svg: string; png: string; alt: string };
  population: string;
  region: string;
  capital: string;
  cca2: string;
}

export default function Home() {
  const [countries, setCountries] = useState<ICountryCardData[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  useEffect(() => {
    async function handleFetch() {
      const res = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2`,
      );

      if (!res.ok) throw new Error("Fetch failed...");

      const data = await res.json();

      console.log(data);

      setCountries(data);
    }

    handleFetch();
  }, []);

  let filteredCountries = countries;

  if (selectedRegion && filteredCountries)
    filteredCountries = filteredCountries.filter(
      (country) => country.region.toLowerCase() === selectedRegion,
    );

  filteredCountries =
    countrySearch && filteredCountries
      ? filteredCountries.filter((country) => {
          // Filter by common name
          if (
            country.name.common
              .toLowerCase()
              .includes(countrySearch.toLowerCase())
          )
            return true;

          // Filter by native names
          if (
            Object.values(country.name.nativeName).find((name) =>
              name.common.toLowerCase().includes(countrySearch.toLowerCase()),
            )
          )
            return true;

          return false;
        })
      : filteredCountries;

  return (
    <div className="space-y-12">
      <div className="flex flex-col justify-between md:flex-row">
        <CountrySearch
          value={countrySearch}
          onChange={(e) => setCountrySearch(e.target.value)}
        />
        <RegionFilter
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        />
      </div>
      <div>{countries && <CountryList countries={filteredCountries} />}</div>
    </div>
  );
}
