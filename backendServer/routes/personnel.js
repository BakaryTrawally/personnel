const express = require("express");
const router = express.Router();
const postTemplateCopy = require("../models/personnelModels");

// CREATE
router.post("/", async (req, res) => {
  try {
    const postUser = new postTemplateCopy(req.body);
    const data = await postUser.save();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const result = await postTemplateCopy.find();
  res.json(result);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const result = await postTemplateCopy.findById(req.params.id);
  res.json(result);
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const result = await postTemplateCopy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const result = await postTemplateCopy.deleteOne({ _id: req.params.id });
  res.json({ deletedCount: result.deletedCount });
});

module.exports = router;
