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

  const handlePersonCreate = (newPerson) => {
    return axios
      .post("http://localhost:3001/persons", newPerson)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setFilteredPersons(persons.concat(response.data));
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
