const regions = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

type AppProps = {
  value: string | null;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function RegionFilter({ value, onChange }: AppProps) {
  return (
    <div className="w-full max-w-[200px] rounded-md shadow-md dark:bg-blue-500">
      <select
        className="h-full bg-transparent px-6 py-4 text-sm focus:outline-none dark:bg-blue-500"
        name="selectedRegion"
        value={value || ""}
        onChange={onChange}
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
