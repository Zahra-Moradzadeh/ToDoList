const express = require("express");
const logger = require("./middleware/logger");
const connectDB = require("./db/connect");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("wlcome to my API");
});

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("server run on PORT: ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
