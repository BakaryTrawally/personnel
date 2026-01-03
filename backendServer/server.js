const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const personnelUrl = require("./routes/personnel");
const leaveUrl= require("./routes/leaves");
const loginUrl = require("./routes/login");

// dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/personnelApp", personnelUrl);
app.use("/api/leaveApp", leaveUrl);
app.use("/api/loginApp", loginUrl);


// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

