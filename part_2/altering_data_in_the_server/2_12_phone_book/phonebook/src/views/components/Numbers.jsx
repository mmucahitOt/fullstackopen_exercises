const Numbers = ({ persons }) => {
  if (!persons || persons.length === 0) {
    return <div>No numbers found</div>;
  }
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
