const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Day-5");
});

app.get("/user", (req, res) => {
  res.send("This is the user page");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `User ${name} added`, email });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
