const express = require("express");
const router = express.Router();
const leaveSchemaCopy = require("../models/leaveModel");

// CREATE
router.post("/", async (req, res) => {
  try {
    const leave = new leaveSchemaCopy(req.body);
    const data = await leave.save();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const result = await leaveSchemaCopy.find();
  res.json(result);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const result = await leaveSchemaCopy.findById(req.params.id);
  res.json(result);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const result = await leaveSchemaCopy.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(result);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const result = await leaveSchemaCopy.deleteOne({ _id: req.params.id });
  res.json({ deletedCount: result.deletedCount });
});

module.exports = router;
