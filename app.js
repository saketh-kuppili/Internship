require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const bcryptjs = require("bcryptjs");
// const UserDataIDP = require("./models/UserData.js");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const app = express();

const Auth = require("./routes/auth.js");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.DBPORT, function (err) {
  if (err) {
    console.log("Database Not Connected");
  } else {
    console.log("Database Connected");
  }
});

app.use("/", Auth);


app.listen(process.env.PORT, function () {
  console.log("Server started on " + process.env.BASE_URL);
});