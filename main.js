const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to Day-5" });
  console.log(req.body)
});

app.post("/user", (req, res) => {
 res.send({ msg: "User created successfully", user: req.body });
 console.log(req.body)
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});