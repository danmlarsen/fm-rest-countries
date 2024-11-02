import { motion } from "framer-motion";

import CountryList from "../components/CountryList";
import CountryListOperations from "../components/CountryListOperations";

export default function Home() {
  return (
    <motion.div
      key="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <CountryListOperations />
      <CountryList />
    </motion.div>
  );
}
