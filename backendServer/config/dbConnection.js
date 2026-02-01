const mongoose = require("mongoose");


// personnel db
const connectPersonnelDB = mongoose.createConnection(
  process.env.PERSONNER_CONNECTION
  // { useNewUrlParser: true, useUnifiedTopology: true }
);

// login db
const connectLoginDB = mongoose.createConnection(
  process.env.LOGIN_CONNECTION
);

// leave db
const connectLeaveDB = mongoose.createConnection(
  process.env.LEAVE_CONNECTION
  
);


connectPersonnelDB.on("connected", () =>
  console.log("Personnel DB connected")
);

connectLoginDB.on("connected", () =>
  console.log("Login DB connected")
);

connectLeaveDB.on("connected", () =>
  console.log("Leave DB connected")
);

module.exports = {
  connectPersonnelDB,
  connectLoginDB,
  connectLeaveDB,
};