import { useState } from "react";
import { FormInput, FormSubmitButton } from "../../components";

const FormPerson = ({ persons, handlePersonCreate, handlePersonUpdate }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handlePersonUpdateDialog = (person, newPerson) => {
    window.confirm(
      `${person.name} is already added to phonebook, replace the old number with a new one?`
    )
      ? handlePersonUpdate(person.id, newPerson)
      : null;
  };
  const handlePersonSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const alreadyExistingPerson = persons.find(
      (person) => person.name === newName
    );
    if (alreadyExistingPerson) {
      newPerson.id = String(alreadyExistingPerson.id);
      handlePersonUpdateDialog(alreadyExistingPerson, newPerson);
    } else {
      newPerson.id = String(persons.length + 1);
      handlePersonCreate(newPerson).then(() => {
        setNewName("");
        setNewNumber("");
      });
    }
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
      <FormSubmitButton onClick={handlePersonSubmit} />
    </form>
  );
};

export default FormPerson;
