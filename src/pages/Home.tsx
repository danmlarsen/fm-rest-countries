import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiRestCountries";

import { ICountryName } from "./Country";
import CountryList from "../components/CountryList";
import CountrySearch from "../components/CountrySearch";
import RegionFilter from "../components/RegionFilter";

export interface ICountryCardData {
  name: ICountryName;
  flags: { svg: string; png: string; alt: string };
  population: string;
  region: string;
  capital: string;
  cca2: string;
}

export default function Home() {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery<ICountryCardData[]>({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

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
      <div className="space-y-10 lg:space-y-16">
        {countries && (
          <>
            {filteredCountries && <CountryList countries={filteredCountries} />}
          </>
        )}
      </div>
    </div>
  );
}
