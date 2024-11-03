import { motion } from "framer-motion";

import CountryList, { ICountryCardData } from "../components/CountryList";
import CountryListOperations from "../components/CountryListOperations";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiRestCountries";
import { BounceLoader } from "react-spinners";

export default function Home() {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery<ICountryCardData[]>({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (error) throw new Error(error?.message);

  return (
    <motion.div
      key="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <CountryListOperations />
      {isLoading ? (
        <BounceLoader />
      ) : (
        <CountryList countries={countries || []} />
      )}
    </motion.div>
  );
}
