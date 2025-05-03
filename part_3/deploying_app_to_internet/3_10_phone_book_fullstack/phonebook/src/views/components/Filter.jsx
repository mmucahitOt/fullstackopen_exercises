import { useState } from "react";

const Filter = ({ persons, setFilteredPersons }) => {
  const [filterByName, setFilterByName] = useState("");

  const handleFilterByNameChange = (event) => {
    const filterValue = event.target.value;
    setFilterByName(filterValue);

    if (filterValue === "") {
      // If filter is empty, show all persons
      console.log("filter is empty");
      setFilteredPersons(persons);
    } else {
      // Otherwise, filter the persons
      const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      setFilteredPersons(filteredPersons);
    }
  };

  return (
    <div>
      filter shown with{" "}
      <input
        id="filterByName"
        value={filterByName}
        onChange={handleFilterByNameChange}
      />
    </div>
  );
};

export default Filter;
