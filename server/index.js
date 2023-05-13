const express = require("express");
const logger = require("./middleware/logger");
require("dotenv").config();
const connectDB = require("./db/connect");
const router = require("./routes/route");
const cors = require("cors");

const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true }), logger);


app.use("/task", router);
app.get("/", (req, res) => {
  res.send("welcome to my API");
});

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("Server run on port:", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
