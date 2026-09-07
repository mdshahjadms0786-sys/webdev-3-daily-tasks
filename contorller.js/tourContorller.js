const tourModel = require("../model/tourModel");

module.exports = {
  getAll(req, res) {
    res.json(tourModel.getAll());
  },
  getOne(req, res) {
    const tour = tourModel.getById(Number(req.params.id));
    if (!tour) return res.status(404).json({ error: "Tour not found" });
    res.json(tour);
  },
  create(req, res) {
    res.status(201).json(tourModel.create(req.body));
  },
  update(req, res) {
    const tour = tourModel.update(Number(req.params.id), req.body);
    if (!tour) return res.status(404).json({ error: "Tour not found" });
    res.json(tour);
  },
  remove(req, res) {
    const tour = tourModel.remove(Number(req.params.id));
    if (!tour) return res.status(404).json({ error: "Tour not found" });
    res.json(tour);
  },
  saveDateById(req, res) {
    const tour = tourModel.saveDateById(Number(req.params.id), req.body.date);
    if (!tour) return res.status(404).json({ error: "Tour not found" });
    res.json(tour);
  },
};