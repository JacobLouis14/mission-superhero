const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE)
  .then((res) => {
    console.log("connection with database successfull");
  })
  .catch((err) => {
    console.log(`error with database connection ${err}`);
  });
