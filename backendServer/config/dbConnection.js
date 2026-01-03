const mongoose = require("mongoose");

// Database
// const connectPersonnelDB = async () => {
//   await mongoose
//   .connect(process.env.PERSONNER_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.error(err));

// }

const connectPersonnelDB = mongoose.createConnection(
  process.env.PERSONNER_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }
);


// const connectLoginDB = async () => {
//  await mongoose
//   .connect(process.env.LOGIN_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.error(err));
// }

const connectLoginDB = mongoose.createConnection(
  process.env.LOGIN_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }
);


// const connectLeaveDB = async () => {
//  await mongoose
//   .connect(process.env.LEAVE_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.error(err));

// }

const connectLeaveDB = mongoose.createConnection(
  process.env.LEAVE_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }
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