import { ICountryCardData } from "../pages/Home";
import CountryCard from "./CountryCard";

type AppProps = {
  countries: ICountryCardData[];
};

export default function CountryList({ countries }: AppProps) {
  return (
    <div className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] justify-items-center gap-16">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}
