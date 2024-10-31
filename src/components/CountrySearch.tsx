import { HiMagnifyingGlass } from "react-icons/hi2";

type AppProps = {
  value: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CountrySearch({ value, onChange }: AppProps) {
  return (
    <div className="relative flex w-full max-w-[480px] items-center gap-6 rounded-md px-8 shadow-md dark:bg-blue-500">
      <HiMagnifyingGlass className="size-4 md:size-[18px]" />
      <input
        className="h-full w-full bg-transparent py-4 text-sm focus:outline-none dark:placeholder:text-white"
        type="text"
        name="countryName"
        id="countryName"
        placeholder="Search for a country..."
        autoComplete="off"
        value={value || ""}
        onChange={onChange}
      />
    </div>
  );
}
