import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/apiRestCountries";

import CountryDetails from "../components/CountryDetails";
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

  const {
    data: country,
    isLoading,
    error,
  } = useQuery<ICountryData>({
    queryKey: ["countries", countryName],
    queryFn: () => getCountry(countryName || ""),
  });

  return (
    <article className="space-y-16 md:space-y-20">
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
