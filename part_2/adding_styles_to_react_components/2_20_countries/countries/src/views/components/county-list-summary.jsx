import { CountryFilterInput } from "./components";

export const CountryListSummary = ({ filter, setFilter }) => {
  return (
    <div>
      <CountryFilterInput filter={filter} setFilter={setFilter} />
      <div>Too many matches, specify another filter</div>
    </div>
  );
};
