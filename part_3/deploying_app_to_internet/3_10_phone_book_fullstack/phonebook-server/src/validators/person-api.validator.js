const personService = require("../data/person-service");

const validateCreatePerson = (request, response) => {
  if (!request.body.name) {
    response.status(400).json({ error: "name missing" });
    return false;
  }
  if (!request.body.number) {
    response.status(400).json({ error: "number missing" });
    return false;
  }
  if (personService.nameExists(request.body.name)) {
    response.status(400).json({ error: "name must be unique" });
    return false;
  }
  return true;
};

module.exports = { validateCreatePerson };
