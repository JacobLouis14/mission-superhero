require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("./databaseConnection");

// routes
const grievanceRoute = require("./routes/grievances");
const authRoute = require("./routes/auth");

const server = express();

server.use(cors());
server.use(express.json());
server.use(logger("dev"));

// route controller
server.use("/api/grievance", grievanceRoute);
server.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
