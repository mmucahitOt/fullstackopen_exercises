const personService = require("../services/person-service");
const {
  nameMissing,
  numberMissing,
  personAlreadyExists,
} = require("../errors/validation.errors");

const validateCreatePerson = (request, response) => {
  if (!request.body.name) {
    throw nameMissing;
  }
  if (!request.body.number) {
    throw numberMissing;
  }
  return true;
};

module.exports = { validateCreatePerson };
