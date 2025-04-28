import { useState, useEffect } from "react";
import { Filter, FormPerson, Numbers } from "./components";
import phoneService from "../services/person-service";
import { Notification } from "../components";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    phoneService.getAll().then((persons) => {
      setPersons(persons);
      setFilteredPersons(persons);
    });
  }, []);

  const handleNotification = (message) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 3000);
  };

  const handlePersonCreate = (newPerson) => {
    return phoneService.create(newPerson).then((createdPerson) => {
      setPersons(persons.concat(createdPerson));
      setFilteredPersons(persons.concat(createdPerson));
      handleNotification(`Added ${createdPerson.name}`);
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
      handleNotification(`Updated ${updatedPerson.name}`);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <FormPerson
        persons={persons}
        handlePersonCreate={handlePersonCreate}
        handlePersonUpdate={handlePersonUpdate}
        handleNotification={handleNotification}
      />
      <Numbers
        persons={filteredPersons}
        handlePersonDelete={handlePersonDelete}
      />
    </div>
  );
};

export default Phonebook;
