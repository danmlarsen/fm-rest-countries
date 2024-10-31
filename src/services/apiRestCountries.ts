import { ICountryName } from "../pages/Country";

export async function getCountries() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2`,
  );

  if (!res.ok) throw new Error("Fetch failed...");

  const data = await res.json();

  return data;
}

export async function getCountry(countryName: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryName}`,
  );

  if (!res.ok) throw new Error("Fetch failed...");

  const [data] = await res.json();

  let borderCountryData = [];
  if (data.borders?.length > 0) {
    const borderCountryCodes = data.borders.join(",").toLowerCase();
    const borderCountryRes = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borderCountryCodes}&fields=name,cca2`,
    );
    borderCountryData = await borderCountryRes.json();
  }

  const formattedData = {
    ...data,
    borders: borderCountryData.map(
      (borderCountry: { name: ICountryName; cca2: string }) => {
        return {
          name: borderCountry.name.common,
          shortname: borderCountry.cca2,
        };
      },
    ),
  };

  return formattedData;
}
