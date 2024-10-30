import BorderCountryList from "./BorderCountryList";

import { ICountryData } from "../pages/Country";

type AppProps = {
  country: ICountryData;
};

export default function CountryDetails({ country }: AppProps) {
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  console.log(country);

  const nativeName = Object.values(name.nativeName)
    .map((name) => name.common)
    .join(", ");
  const formattedPopulation = new Intl.NumberFormat().format(+population);
  const formattedCurrencies = currencies
    ? Object.values(currencies)
        .map((cur) => cur.name)
        .join(", ")
    : "";
  const formattedLanguages = Object.values(languages).join(", ");
  const formattedTld = tld ? tld.join(" ") : "None";

  return (
    <article>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <img src={flags.svg} alt={flags.alt} />
        </div>
        <div className="space-y-4 text-sm">
          <h2 className="text-2xl font-extrabold">{name.common}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Detail field="Native Name" data={nativeName} />
              <Detail field="Population" data={formattedPopulation} />
              <Detail field="Region" data={region} />
              <Detail field="Sub Region" data={subregion} />
              <Detail field="Capital" data={capital?.[0]} />
            </div>
            <div>
              <Detail field="Top Level Domain" data={formattedTld} />
              <Detail field="Currencies" data={formattedCurrencies} />
              <Detail field="Languages" data={formattedLanguages} />
            </div>
          </div>
          <div>
            <h3 className="text-base font-extrabold">Border Countries:</h3>
            <BorderCountryList borderCountries={borders} />
          </div>
        </div>
      </div>
    </article>
  );
}

function Detail({ field, data }: { field: string; data: string }) {
  return (
    <p>
      <strong className="font-semibold">{field}: </strong>
      <span>{data}</span>
    </p>
  );
}
