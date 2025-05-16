const result = require("dotenv").config();
console.log(result);
const express = require("express");
const app = express();
const morgan = require("morgan");
const personService = require("./services/person-service");
const personApiValidator = require("./validators/person-api.validator");
const { connectToDatabase } = require("./configs/mongodb.config");
const cors = require("cors");
const unknownEndpoint = require("./middleware/unknown-endpoint.middleaware");
const errorHandler = require("./middleware/error-handling.middleware");
const {
  validationMiddleware,
} = require("./middleware/person-api.validator.middleware");

const MONGODB_URI = process.env.MONGODB_URI;

// Pass the URI to the connect function
connectToDatabase(MONGODB_URI);
app.use(cors());
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

app.use("/api/persons", validationMiddleware);

app.get("/api/persons", (request, response, next) => {
  personService
    .getAll()
    .then((persons) => {
      response.json(persons);
    })
    .catch((error) => {
      next(error);
    });
});

app.get("/info", (request, response) => {
  const date = new Date();
  const persons = personService.getAll().then((persons) => {
    response.send(
      `<p>Phonebook has info for ${persons.length} people</p>
    <p>${date.toString()}</p>`
    );
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  personService
    .getById(id)
    .then((person) => {
      response.json(person);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  personService
    .deletePerson(id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => {
      next(error);
    });
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;
  personService
    .addPerson({
      name: body.name,
      number: body.number,
    })
    .then((person) => {
      response.json(person);
    })
    .catch((error) => {
      next(error);
    });
});

// error handling middleware
app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
