import { useEffect, useState } from "react";

import CountryList from "../components/CountryList";

export default function Home() {
  const [countries, setCountries] = useState(null);

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

  return <div>{countries && <CountryList countries={countries} />}</div>;
}
