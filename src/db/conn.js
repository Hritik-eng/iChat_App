//require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MongoDB_URL)
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((e) => {
    console.log(e);
  });
