const express = require("express");
const app = express();
const persons = require("./data/persons");

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${date.toString()}</p>`
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
