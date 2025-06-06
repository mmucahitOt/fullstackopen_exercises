const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const personService = require("./data/person-service");
const personApiValidator = require("./validators/person-api.validator");

app.use(cors());
app.use(express.json());

// Create a custom token for request body
morgan.token("body", (req) => JSON.stringify(req.body));

// Use a custom format that includes the body for POST requests
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(personService.getAll());
});

app.get("/info", (request, response) => {
  const date = new Date();
  const persons = personService.getAll();
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${date.toString()}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = personService.getById(id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  console.log("id", id);
  personService.deletePerson(id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  if (!personApiValidator.validateCreatePerson(request, response)) {
    return;
  }

  const body = request.body;
  const person = personService.addPerson(body.name, body.number);
  response.json(person);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
