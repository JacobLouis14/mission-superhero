const express = require("express");
const { loginHandler, registerHandler } = require("../controllers/auth");
const router = express.Router();

// login
router.post("/login", loginHandler);

// register
router.post("/register", registerHandler);

module.exports = router;
