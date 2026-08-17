const express = require("express");
const app = express();

app.use(express.json());

const locations = {
  delhi: { city: "Delhi", country: "India", famous: "India Gate" },
  paris: { city: "Paris", country: "France", famous: "Eiffel Tower" },
  tokyo: { city: "Tokyo", country: "Japan", famous: "Mount Fuji" },
  newyork: { city: "New York", country: "USA", famous: "Statue of Liberty" },
};

const people = {
  rahul: { name: "Rahul", age: 22, city: "Delhi" },
  aisha: { name: "Aisha", age: 21, city: "Paris" },
  tanaka: { name: "Tanaka", age: 23, city: "Tokyo" },
};

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Day-6",
    routes: [
      "GET /",
      "GET /location",
      "GET /location?name=delhi",
      "GET /person",
      "GET /person?name=rahul",
    ],
  });
});

app.get("/location", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.json({ locations: Object.keys(locations) });
  }

  const info = locations[name.toLowerCase()];
  if (!info) {
    return res.status(404).json({ error: "Location not found" });
  }

  res.json(info);
});

app.get("/person", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.json({ people: Object.keys(people) });
  }

  const info = people[name.toLowerCase()];
  if (!info) {
    return res.status(404).json({ error: "Person not found" });
  }

  res.json(info);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
