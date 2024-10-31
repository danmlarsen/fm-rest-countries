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
      <div className="container mx-auto grid items-center justify-center gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-full max-h-[400px] w-full object-cover"
              src={flags.svg}
              alt={flags.alt}
            />
          </div>
        </div>
        <div className="max-w-lg space-y-4 text-sm lg:max-w-full">
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
          <div className="flex flex-col gap-4 md:flex-row">
            <h3 className="flex-shrink-0 text-base font-extrabold leading-10">
              Border Countries:
            </h3>
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
