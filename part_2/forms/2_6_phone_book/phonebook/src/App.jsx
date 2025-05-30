import { useState } from "react";

const App = () => {
  const [filterByName, setFilterByName] = useState("");
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
    const nameIsAlreadyInUse = persons.some(
      (person) => person.name === event.target.value
    );
    if (nameIsAlreadyInUse) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    }
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          <button type="submit" onClick={handleNameSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={person.name}>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
