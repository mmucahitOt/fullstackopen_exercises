const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

if (process.argv.length === 4 || process.argv.length > 5) {
  console.log("give name and number as arguments");
  process.exit(1);
}

console.log(name, number);

const password = process.argv[2];

const url = `mongodb+srv://mmucahit0:${password}@phonebook-cluster.dxjpsrz.mongodb.net/phonebook?retryWrites=true&w=majority&appName=phonebook-cluster`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  fetchPersons();
}

if (process.argv.length === 5) {
  savePerson({ name: process.argv[3], number: process.argv[4] });
}

function savePerson({ name, number }) {
  const person = new Person({
    name: name,
    number: number,
  });

  person.save().then((result) => {
    console.log("person saved!");
    mongoose.connection.close();
  });
}

function fetchPersons() {
  Person.find({}).then((result) => {
    console.log(result);
    mongoose.connection.close();
  });
}
