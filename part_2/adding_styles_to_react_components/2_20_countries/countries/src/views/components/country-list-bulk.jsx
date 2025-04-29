import { Countries, CountryFilterInput } from "./components";

export const CountryListBulk = ({ filter, setFilter, countries }) => {
  return (
    <div>
      <CountryFilterInput filter={filter} setFilter={setFilter} />
      <Countries countries={countries} />
    </div>
  );
};
