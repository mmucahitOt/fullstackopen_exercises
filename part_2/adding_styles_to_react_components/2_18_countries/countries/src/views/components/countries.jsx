const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
};

export default Countries;
