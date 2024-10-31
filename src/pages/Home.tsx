import { useEffect, useState } from "react";

import CountryList from "../components/CountryList";
import CountrySearch from "../components/CountrySearch";
import RegionFilter from "../components/RegionFilter";
import { ICountryName } from "./Country";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCountrySearch(event: React.ChangeEvent<HTMLInputElement>) {
    const countrySearch = event.target.value.trim().toLowerCase();
    if (countrySearch) searchParams.set("country", countrySearch);
    else searchParams.delete("country");

    setSearchParams(searchParams);
  }

  function handleRegionFilterChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const region = event.target.value;
    if (region) searchParams.set("region", event.target.value);
    else searchParams.delete("region");

    setSearchParams(searchParams);
  }

  useEffect(() => {
    async function handleFetch() {
      const res = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2`,
      );

      if (!res.ok) throw new Error("Fetch failed...");

      const data = await res.json();

      setCountries(data);
    }

    handleFetch();
  }, []);

  let filteredCountries = countries;

  if (searchParams.get("region") && filteredCountries)
    filteredCountries = filteredCountries.filter(
      (country) => country.region.toLowerCase() === searchParams.get("region"),
    );

  filteredCountries =
    searchParams.get("country") && filteredCountries
      ? filteredCountries.filter((country) => {
          // Filter by common name
          if (
            country.name.common
              .toLowerCase()
              .includes(searchParams.get("country")!)
          )
            return true;

          // Filter by native names
          if (
            Object.values(country.name.nativeName).find((name) =>
              name.common.toLowerCase().includes(searchParams.get("country")!),
            )
          )
            return true;

          return false;
        })
      : filteredCountries;

  // const sortedCountries = filteredCountries.sort((a, b) => {
  //   if (a.name.common < b.name.common) return -1;
  //   else if (a.name.common > b.name.common) return 1;
  //   return 0;
  // });
  // console.log(sortedCountries);

  return (
    <div className="space-y-12">
      <div className="flex min-h-14 flex-col justify-between gap-10 sm:flex-row">
        <CountrySearch
          value={searchParams.get("country")}
          onChange={handleCountrySearch}
        />
        <RegionFilter
          value={searchParams.get("region")}
          onChange={handleRegionFilterChange}
        />
      </div>
      <div>{countries && <CountryList countries={filteredCountries} />}</div>
    </div>
  );
}
