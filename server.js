const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
require("dotenv").config();
const db = require("./models/workout_model");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
