// validation errors

const nameMissing = {
  name: "nameMissing",
  message: "name missing",
  code: 400,
};

const numberMissing = {
  name: "numberMissing",
  message: "number missing",
  code: 400,
};

const nameMustBeUnique = {
  name: "nameMustBeUnique",
  message: "name must be unique",
  code: 400,
};

const personNotFound = {
  name: "personNotFound",
  message: "person not found",
  code: 404,
};

// Db lvl errors

const castError = {
  name: "castError",
  message: "malformatted id",
  code: 400,
  kind: "ObjectId",
};

module.exports = {
  nameMissing,
  numberMissing,
  nameMustBeUnique,
  personNotFound,
  castError,
};
