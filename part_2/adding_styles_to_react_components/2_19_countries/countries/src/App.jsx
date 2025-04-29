import { useEffect, useState } from "react";
import { countryService } from "./services";
import CountryList from "./views/country-list";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getCountries().then((data) => setCountries(data));
  }, []);

  return <CountryList countries={countries} />;
}

export default App;
