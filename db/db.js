const mongoose = require("mongoose");

function connect() {
  const uri = "mongodb://127.0.0.1:27017/db_lova";

  mongoose
    .connect(uri)
    .then(() => console.log("Connected to the database!"))
    .catch((err) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
}

module.exports = { connect: connect };
