import { useEffect, useState } from "react";
import { Countries, CountryFilterInput, CountryDetail } from "./components";

const CountryList = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );

    const countryWithNameMatchingFilter = filteredCountries.find(
      (country) => country.name.common.toLowerCase() === filter.toLowerCase()
    );

    if (countryWithNameMatchingFilter) {
      setFilteredCountries([countryWithNameMatchingFilter]);
    } else {
      setFilteredCountries(filteredCountries);
    }
  }, [filter, countries]);

  if (filteredCountries.length > 10) {
    return (
      <div>
        <CountryFilterInput filter={filter} setFilter={setFilter} />
        <div>Too many matches, specify another filter</div>
      </div>
    );
  }

  if (filteredCountries.length === 1) {
    return (
      <div>
        <CountryFilterInput filter={filter} setFilter={setFilter} />
        <CountryDetail country={filteredCountries[0]} />
      </div>
    );
  }

  return (
    <div>
      <CountryFilterInput filter={filter} setFilter={setFilter} />
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default CountryList;
