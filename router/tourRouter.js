const express = require("express");
const router = express.Router();
const presenter = require("../contorller.js/tourContorller");

router.get("/", presenter.getAll);
router.get("/:id", presenter.getOne);
router.post("/", presenter.create);
router.put("/:id", presenter.update);
router.delete("/:id", presenter.remove);

module.exports = router;