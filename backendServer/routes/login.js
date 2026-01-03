const express = require("express");
const router = express.Router();
const loginUserCopy = require("../models/loginModel");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const user = new loginUserCopy(req.body);
    const data = await user.save();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await loginUserCopy.findOne({ email });

  if (!user) {
    return res.json({ status: "Error", message: "No record existed" });
  }

  if (user.password !== password) {
    return res.json({ status: "Error", message: "Incorrect password" });
  }

  res.json({
    status: "Success",
    id: user._id,
    name: user.name,
    email: user.email
  });
});

// GET USER
router.get("/:id", async (req, res) => {
  const user = await loginUserCopy.findById(req.params.id);
  res.json(user);
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const data = await loginUserCopy.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
});

module.exports = router;
