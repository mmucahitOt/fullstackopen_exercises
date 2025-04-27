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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <FormPerson persons={persons} handlePersonCreate={handlePersonCreate} />
      <Numbers persons={filteredPersons} />
    </div>
  );
};

export default Phonebook;
