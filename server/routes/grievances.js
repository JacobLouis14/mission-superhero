const express = require("express");
const {
  getAllGrievanceHandler,
  createGrievanceHandler,
  searchedGrievanceHandler,
  grievanceFilterHandler,
} = require("../controllers/grievance");
const isHero = require("../middleware/Ishero");
const router = express.Router();

router.get("/get-all-grievance/:token", isHero, getAllGrievanceHandler);
router.post("/create-grievance", createGrievanceHandler);
router.get("/get-searched-grievance/:token", isHero, searchedGrievanceHandler);
router.get("/get-filtered-grievance/:token", isHero, grievanceFilterHandler);

module.exports = router;
