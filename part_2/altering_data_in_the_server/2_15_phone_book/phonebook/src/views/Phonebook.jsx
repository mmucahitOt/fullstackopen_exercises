import { useState, useEffect } from "react";
import { Filter, FormPerson, Numbers } from "./components";
import phoneService from "../services/person-service";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);

  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    phoneService.getAll().then((persons) => {
      setPersons(persons);
      setFilteredPersons(persons);
    });
  }, []);

  const handlePersonCreate = (newPerson) => {
    return phoneService.create(newPerson).then((createdPerson) => {
      setPersons(persons.concat(createdPerson));
      setFilteredPersons(persons.concat(createdPerson));
    });
  };

  const handlePersonDelete = (id) => {
    phoneService.deletePerson(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
      setFilteredPersons(filteredPersons.filter((person) => person.id !== id));
    });
  };

  const handlePersonUpdate = (id, newPerson) => {
    phoneService.update(id, newPerson).then((updatedPerson) => {
      setPersons(
        persons.map((person) => (person.id === id ? updatedPerson : person))
      );
      setFilteredPersons(
        filteredPersons.map((person) =>
          person.id === id ? updatedPerson : person
        )
      );
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <FormPerson
        persons={persons}
        handlePersonCreate={handlePersonCreate}
        handlePersonUpdate={handlePersonUpdate}
      />
      <Numbers
        persons={filteredPersons}
        handlePersonDelete={handlePersonDelete}
      />
    </div>
  );
};

export default Phonebook;
