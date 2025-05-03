let persons = require("./persons");
const { generateId } = require("../common/id-generator");

const getAll = () => {
  return persons;
};

const getById = (id) => {
  return persons.find((person) => person.id === id);
};

const deletePerson = (id) => {
  persons = persons.filter((person) => person.id !== id);
};

const addPerson = (name, number) => {
  let id = generateId();
  while (idExists(id)) {
    id = generateId();
  }
  const person = {
    name,
    number,
    id,
  };
  persons = persons.concat(person);
  return person;
};

const nameExists = (name) => {
  return persons.some((person) => person.name === name);
};

const idExists = (id) => {
  return persons.some((person) => person.id === id);
};

module.exports = {
  getAll,
  getById,
  deletePerson,
  addPerson,

  nameExists,
  idExists,
};
