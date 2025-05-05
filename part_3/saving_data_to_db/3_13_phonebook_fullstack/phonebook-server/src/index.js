const result = require("dotenv").config();
console.log(result);
const express = require("express");
const app = express();
const morgan = require("morgan");
const personService = require("./services/person-service");
const personApiValidator = require("./validators/person-api.validator");
const { connectToDatabase } = require("./configs/mongodb.config");

const MONGODB_URI = process.env.MONGODB_URI;

// Pass the URI to the connect function
connectToDatabase(MONGODB_URI);

app.use(express.json());

app.use(express.static("dist"));

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
