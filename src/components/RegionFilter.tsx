const regions = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

type AppProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function RegionFilter({ value, onChange }: AppProps) {
  return (
    <div className="max-w-[200px]">
      <select
        className="px-6 py-4 focus:outline-none"
        name="selectedRegion"
        value={value}
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
