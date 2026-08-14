const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Day-5",
    routes: ["GET /", "GET /health", "GET /user", "POST /user"],
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", day: 5 });
});

app.get("/user", (req, res) => {
  res.json({ message: "This is the user page" });
});

app.get("/home", (req, res) => {
  res.json({ message: "This is the home page" });
});


app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  res.status(201).json({ message: `User ${name} added`, email });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
