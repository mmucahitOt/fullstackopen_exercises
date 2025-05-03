import { useState, useEffect } from "react";
import { Filter, FormPerson, Numbers } from "./components";
import phoneService from "../services/person-service";
import { Notification } from "../components";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [notificationSpec, setNotificationSpec] = useState(null);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    return phoneService.getAll().then((persons) => {
      setPersons(persons);
      setFilteredPersons(persons);
    });
  };

  const handleNotification = ({ message, type }) => {
    setNotificationSpec({ message, type });
    setTimeout(() => {
      setNotificationSpec(null);
    }, 3000);
  };

  const handlePersonCreate = (newPerson) => {
    return fetchPersons().then(() => {
      console.log("fetchPersons");
      phoneService
        .create(newPerson)
        .then((createdPerson) => {
          setPersons(persons.concat(createdPerson));
          setFilteredPersons(persons.concat(createdPerson));
          handleNotification({
            message: `Added ${createdPerson.name}`,
            type: "success",
          });
        })
        .finally(() => {
          fetchPersons();
        });
    });
  };

  const handlePersonDelete = (person) => {
    fetchPersons().then(() => {
      phoneService
        .deletePerson(person.id)
        .finally(() => {
          fetchPersons();
        })
        .catch((error) => {
          console.log(error);
          handleNotification({
            message: `Information of ${person.name} has already been removed from server`,
            type: "error",
          });
        })
        .finally(() => {
          fetchPersons();
        });
    });
  };

  const handlePersonUpdate = (id, newPerson) => {
    fetchPersons().then(() => {
      phoneService
        .update(id, newPerson)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) => (person.id === id ? updatedPerson : person))
          );
          setFilteredPersons(
            filteredPersons.map((person) =>
              person.id === id ? updatedPerson : person
            )
          );
          handleNotification({
            message: `Updated ${updatedPerson.name}`,
            type: "success",
          });
        })
        .finally(() => {
          fetchPersons();
        });
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationSpec={notificationSpec} />

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
