import { ICountryCardData } from "../components/CountryList";

export function sortTopCountries(countries: ICountryCardData[]) {
  const topCountryNames = ["de", "us", "br", "is", "af", "ax", "al", "dz"];

  const topCountries = countries?.filter((country) =>
    topCountryNames.includes(country.cca2.toLowerCase()),
  );
  countries = countries?.filter(
    (country) => !topCountryNames.includes(country.cca2.toLowerCase()),
  );

  return [
    topCountries[2],
    topCountries[5],
    topCountries[7],
    topCountries[3],
    topCountries[0],
    topCountries[4],
    topCountries[6],
    topCountries[1],
    ...countries,
  ];
}

export const filterByRegion = (countries: ICountryCardData[], region: string) =>
  countries.filter((country) => country.region.toLowerCase() === region);

export const filterByCountryName = (
  countries: ICountryCardData[],
  countryName: string,
) =>
  countries.filter((country) => {
    // Filter by common name
    if (country.name.common.toLowerCase().includes(countryName)) return true;

    // Filter by native names
    if (
      Object.values(country.name.nativeName).find((name) =>
        name.common.toLowerCase().includes(countryName),
      )
    )
      return true;

    return false;
  });
