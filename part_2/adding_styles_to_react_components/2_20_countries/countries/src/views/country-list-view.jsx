import { useEffect, useState } from "react";
import {
  CountryListSingleItem,
  CountryListBulk,
  CountryListSummary,
} from "./components";

const CountryListView = ({ countries }) => {
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
    return <CountryListSummary filter={filter} setFilter={setFilter} />;
  }

  if (filteredCountries.length === 1) {
    return (
      <CountryListSingleItem
        country={filteredCountries[0]}
        filter={filter}
        setFilter={setFilter}
      />
    );
  }

  return (
    <CountryListBulk
      filter={filter}
      setFilter={setFilter}
      countries={filteredCountries}
    />
  );
};

export default CountryListView;
