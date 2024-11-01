import CountryList from "../components/CountryList";
import CountryListOperations from "../components/CountryListOperations";

export default function Home() {
  return (
    <div className="space-y-12">
      <CountryListOperations />
      <CountryList />
    </div>
  );
}
