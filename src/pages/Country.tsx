import { useParams } from "react-router-dom";

import CountryDetails from "../components/CountryDetails";
import { useEffect, useState } from "react";

export default function Country() {
  const { countryName } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function handleFetch() {
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
        borders: borderCountryData.map((borderCountry) => {
          return {
            name: borderCountry.name.common,
            shortname: borderCountry.cca2,
          };
        }),
      };

      setCountry(formattedData);
    }

    handleFetch();
  }, [countryName]);

  return country ? (
    <CountryDetails country={country} />
  ) : (
    <p>No country found</p>
  );
}
