type AppProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CountrySearch({ value, onChange }: AppProps) {
  return (
    <div className="max-w-[480px]">
      <input
        className="w-full px-8 py-4 focus:outline-none"
        type="text"
        name="countryName"
        id="countryName"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
