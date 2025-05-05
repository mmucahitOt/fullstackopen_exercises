let persons = require("../data/persons");

const Person = require("../models/person.model");

const getAll = () => {
  return Person.find({}).then((result) =>
    result.map((person) => person.toJSON())
  );
};

const getById = (id) => {
  return persons.find((person) => person.id === id);
};

const deletePerson = (id) => {
  persons = persons.filter((person) => person.id !== id);
};

const addPerson = ({ name, number }) => {
  const person = new Person({ name, number });
  return person.save().then((result) => result);
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
