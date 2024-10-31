import CountryList from "../components/CountryList";
import CountrySearch from "../components/CountrySearch";
import RegionFilter from "../components/RegionFilter";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="flex min-h-14 flex-col justify-between gap-10 sm:flex-row">
        <CountrySearch />
        <RegionFilter />
      </div>
      <div className="space-y-10 lg:space-y-16">
        <CountryList />
      </div>
    </div>
  );
}
