import { useState, useEffect } from "react";
import { Filter, FormPerson, Numbers } from "./components";
import axios from "axios";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);

  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setFilteredPersons(response.data);
    });
  }, []);

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
