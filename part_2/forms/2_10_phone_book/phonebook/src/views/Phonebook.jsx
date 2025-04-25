import { useState } from "react";
import { Filter, FormPerson, Numbers } from "./components";

const Phonebook = ({ persons, setPersons }) => {
  const [filteredPersons, setFilteredPersons] = useState(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <FormPerson
        persons={persons}
        setPersons={(newPersons) => {
          setPersons(newPersons);
          setFilteredPersons(newPersons);
        }}
      />
      <Numbers persons={filteredPersons} />
    </div>
  );
};

export default Phonebook;
