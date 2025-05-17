const {
  nameMissing,
  numberMissing,
  nameMustBeUnique,
  personAlreadyExists,
} = require("../../errors/validation.errors");
const { castError } = require("../../errors/errors");

const errorHandler = (error, request, response, next) => {
  // validation error handling

  if (error.name === nameMissing.name) {
    return response
      .status(nameMissing.code)
      .send({ error: nameMissing.message });
  }

  if (error.name === numberMissing.name) {
    return response
      .status(numberMissing.code)
      .send({ error: numberMissing.message });
  }

  if (error.name === personAlreadyExists.name) {
    return response
      .status(personAlreadyExists.code)
      .send({ error: personAlreadyExists.message, userId: error.userId });
  }

  // entity field validations

  if (error.name === nameMustBeUnique.name) {
    return response
      .status(nameMustBeUnique.code)
      .send({ error: nameMustBeUnique.message});
  }

  // db lvl error handling

  if (error.kind === castError.kind) {
    return response.status(castError.code).send({ error: castError.message });
  }

  next(error);
};

module.exports = errorHandler;
