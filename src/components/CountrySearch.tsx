import { useSearchParams } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function CountrySearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCountrySearch(event: React.ChangeEvent<HTMLInputElement>) {
    const countrySearch = event.target.value.trim().toLowerCase();
    if (countrySearch) searchParams.set("country", countrySearch);
    else searchParams.delete("country");

    setSearchParams(searchParams);
  }

  return (
    <div className="relative flex w-full max-w-[30rem] items-center gap-6 rounded-md px-8 shadow-lg transition duration-300 has-[:focus]:ring-2 dark:bg-blue-500 dark:ring-white">
      <HiMagnifyingGlass className="size-4 md:size-[1.125rem]" />
      <input
        className="h-full w-full bg-transparent py-4 text-sm focus:outline-none dark:placeholder:text-white"
        type="text"
        name="countryName"
        id="countryName"
        placeholder="Search for a country..."
        autoComplete="off"
        value={searchParams.get("country") || ""}
        onChange={handleCountrySearch}
      />
    </div>
  );
}
