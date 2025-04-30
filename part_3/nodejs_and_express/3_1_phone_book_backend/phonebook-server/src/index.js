const express = require("express");
const app = express();
const persons = require("./data/persons");

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
