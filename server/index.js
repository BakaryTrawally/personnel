const express = require("express");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv")
const routesUrl = require("./routes/routes")
const cors = require("cors")


dotenv.config()
// mongoose.connect(process.env.CONNECTION, () => console.log("DATABASE CONNECTED"))
mongoose
  .connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

// mongoose.connect('mongodb://localhost:27017/PersonnelDataBase')
    

app.use(express.json())
// app.use(cors())
app.use(cors());
// app.use(cors({
//   origin: "https://bakarytrawally.github.io/personnel", // frontend URL
//   credentials: true
// }));
app.use('/leaveApp', routesUrl)

const PORT = 3005
app.listen(PORT, () => console.log("server is running on port " + PORT))