let persons = require("../data/persons");

const Person = require("../models/person.model");

const getAll = () => {
  return Person.find({});
};

const getById = (id) => {
  return Person.findById(id);
};

const deletePerson = (id) => {
  return Person.findByIdAndDelete(id);
};

const addPerson = ({ name, number }) => {
  const person = new Person({ name, number });
  return person.save();
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
