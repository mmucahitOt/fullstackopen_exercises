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

const personAlreadyExists = {
  name: "personAlreadyExists",
  message: "person already exists",
  code: 400,
};

const personNotExists = {
  name: "personNotExists",
  message: "person not exists",
  code: 404,
};

export {
  nameMissing,
  numberMissing,
  nameMustBeUnique,
  personNotFound,
  personAlreadyExists,
  personNotExists,
};
