const express = require("express");
const tourRouter = require("./router/tourRouter");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Day-8 - MVP Pattern" });
});

app.use("/api/tours", tourRouter);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});