import { useSearchParams } from "react-router-dom";

const regions = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export default function RegionFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleRegionFilterChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const region = event.target.value;
    if (region) searchParams.set("region", event.target.value);
    else searchParams.delete("region");

    setSearchParams(searchParams);
  }

  return (
    <div className="w-full max-w-[200px] rounded-md shadow-md dark:bg-blue-500">
      <select
        className="h-full cursor-pointer bg-transparent px-6 py-4 text-sm focus:outline-none dark:bg-blue-500"
        id="selectRegion"
        name="selectedRegion"
        value={searchParams.get("region") || ""}
        onChange={handleRegionFilterChange}
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
}
