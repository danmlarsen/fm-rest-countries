import { useNavigate, useParams } from "react-router-dom";

import CountryDetails from "../components/CountryDetails";
import { useEffect, useState } from "react";
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
  const { countryName } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState<ICountryData | null>(null);

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
        borders: borderCountryData.map(
          (borderCountry: { name: ICountryName; cca2: string }) => {
            return {
              name: borderCountry.name.common,
              shortname: borderCountry.cca2,
            };
          },
        ),
      };

      setCountry(formattedData);
    }

    handleFetch();
  }, [countryName]);

  return (
    <article className="space-y-20">
      <div>
        <BackButton onClick={() => navigate("/")} />
      </div>
      <div>
        {country ? (
          <CountryDetails country={country} />
        ) : (
          <p>No country data...</p>
        )}
      </div>
    </article>
  );
}
