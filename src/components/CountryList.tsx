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

export interface ICountryCardData {
  name: ICountryName;
  flags: { svg: string; png: string; alt: string };
  population: string;
  region: string;
  capital: string;
  cca2: string;
}

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

  // const sortedCountries = filteredCountries.sort((a, b) => {
  //   if (a.name.common < b.name.common) return -1;
  //   else if (a.name.common > b.name.common) return 1;
  //   return 0;
  // });
  // console.log(sortedCountries);

  return (
    <div className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] justify-items-center gap-10 lg:gap-[74px]">
      {filteredCountries &&
        filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
    </div>
  );
}
