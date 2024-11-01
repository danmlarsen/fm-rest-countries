import CountrySearch from "./CountrySearch";
import RegionFilter from "./RegionFilter";

export default function CountryListOperations() {
  return (
    <div className="flex min-h-14 flex-col justify-between gap-10 sm:flex-row">
      <CountrySearch />
      <RegionFilter />
    </div>
  );
}
