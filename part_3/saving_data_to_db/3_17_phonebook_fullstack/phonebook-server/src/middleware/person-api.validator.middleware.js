const personService = require("../services/person-service");
const {
  nameMissing,
  numberMissing,
  personAlreadyExists,
  personNotExists,
} = require("../errors/validation.errors");

const validateCreatePersonMiddleware = (request, response, next) => {
  if (!request.body.name) {
    return next(nameMissing);
  }
  if (!request.body.number) {
    return next(numberMissing);
  }

  personService
    .nameExists(request.body.name)
    .then((person) => {
      if (person) {
        return next(personAlreadyExists);
      }
      next();
    })
    .catch((error) => next(error));
};

const validateUpdatePersonMiddleware = (request, response, next) => {
  personService
    .nameExists(request.body.name)
    .then((person) => {
      if (!person) {
        return next(personNotExists);
      }
      next();
    })
    .catch((error) => next(error));
};

const validationMiddleware = (request, response, next) => {
  if (request.method === "POST") {
    validateCreatePersonMiddleware(request, response, next);
  } else if (request.method === "PUT") {
    validateUpdatePersonMiddleware(request, response, next);
  }
};

module.exports = { validationMiddleware };
