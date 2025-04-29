import {
  CapitalWeather,
  CountryDetail,
  CountryFilterInput,
} from "./components";

export const CountryListSingleItem = ({ country, filter, setFilter }) => {
  return (
    <div>
      <CountryFilterInput filter={filter} setFilter={setFilter} />
      <CountryDetail country={country} />
      <CapitalWeather
        latitude={country.latlng[0]}
        longitude={country.latlng[1]}
      />
    </div>
  );
};
