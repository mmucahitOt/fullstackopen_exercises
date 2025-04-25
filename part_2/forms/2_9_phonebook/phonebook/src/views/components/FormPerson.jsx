import { useState } from "react";
import { FormInput, FormSubmitButton } from "../../components";

const FormPerson = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNumberSubmit = (event) => {
    event.preventDefault();
    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      })
    );
    setNewName("");
    setNewNumber("");
  };
  return (
    <form>
      <div>
        <h2>add a new</h2>
        <FormInput
          label="name"
          value={newName}
          onChange={handleNameInputChange}
        />
        <FormInput
          label="number"
          value={newNumber}
          onChange={handleNumberInputChange}
        />
      </div>
      <FormSubmitButton onClick={handleNumberSubmit} />
    </form>
  );
};

export default FormPerson;
