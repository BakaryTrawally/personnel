const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const loginUrl = require("./routes/routes")
const cors = require("cors")


dotenv.config()
const app = express()
// app.use(cors())
app.use(cors());
// app.use(cors({
//   origin: "https://bakarytrawally.github.io/personnel", // frontend URL
//   credentials: true
// }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/app', loginUrl)
const PORT = 3007
// mongoose.connect(process.env.CONNECTION, () => console.log("DATABASE CONNECTED"))
mongoose
  .connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database connected");
    console.log("Mongo URI exists:", !!process.env.CONNECTION);
  })
  .catch((error) => {
    console.log(error);
  });

// mongoose.connect('mongodb://localhost:27017/PersonnelDataBase')
app.listen(PORT, (req, res) =>{
    console.log("Server running on port", PORT)
})



