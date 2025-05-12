const personService = require("../services/person-service");
const {
  nameMissing,
  numberMissing,
  nameMustBeUnique,
} = require("../errors/validation.errors");

const validateCreatePerson = (request, response) => {
  if (!request.body.name) {
    throw nameMissing;
  }
  if (!request.body.number) {
    throw numberMissing;
  }
  if (personService.nameExists(request.body.name)) {
    throw nameMustBeUnique;
  }
  return true;
};

module.exports = { validateCreatePerson };
