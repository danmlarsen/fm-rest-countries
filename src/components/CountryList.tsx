import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] justify-items-center gap-16">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}
