const express = require("express");
const app = express();
const package = require("./data/tour");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about",(req,res) =>{
    res.send("this is about page");
});

app.get("/new",(req,res) =>{
    res.send("this is newv  page");
});

app.get("/package", (req, res) => {
  res.json(package);
});

app.get("/package/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tourPackage = package.find(p => p.id === id);
  if (!tourPackage) {
    return res.status(404).json({ error: "Package not found" });
  }
  res.json(tourPackage);
});

app.get("/name/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const tourPackage = package.find(p => p.name.toLowerCase() === name);
  if (!tourPackage) {
    return res.status(404).json({ error: "Package not found" });
  }
  res.json(tourPackage);
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});