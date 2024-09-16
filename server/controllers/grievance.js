const grievanceModel = require("../models/grievances");

// gett all grievance
const getAllGrievanceHandler = async (req, res) => {
  try {
    const { dataPerPage, currentPage } = req.query;

    const allGrievance = await grievanceModel.find({}).sort({ createdAt: -1 });

    if (allGrievance.length < 1) {
      res.status(204).json({ message: "No content", data: allGrievance });
    }

    // pagination
    const totalPages = Math.ceil(allGrievance.length / dataPerPage);
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = currentPage * dataPerPage - 1;
    const paginatedData = allGrievance.slice(startIndex, endIndex);

    res
      .status(200)
      .json({ message: "success", totalPages, data: paginatedData });
  } catch (error) {
    return res.status(500).json({ message: "server error", error });
  }
};

// create grievance
const createGrievanceHandler = async (req, res) => {
  try {
    const { name, email, grievance } = req.body;

    if (!name || !email || !grievance) {
      return res
        .status(400)
        .json({ message: "Bad request", error: "data not recived" });
    }

    const savedGrievance = await new grievanceModel({
      name,
      email,
      grievance,
    }).save();
    return res
      .status(200)
      .json({ message: "sucessfully created", data: savedGrievance });
  } catch (error) {
    return res.status(500).json({ message: "server error", error });
  }
};

// searched grievance
const searchedGrievanceHandler = async (req, res) => {
  try {
    const { searchedValue } = req.query;

    const searchedGrievance = await grievanceModel.find({
      $or: [
        { name: { $regex: searchedValue, $options: "i" } },
        { email: { $regex: searchedValue, $options: "i" } },
      ],
    });

    return res
      .status(200)
      .json({ message: "success", data: searchedGrievance });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "server error", error });
  }
};

// filter grievance
const grievanceFilterHandler = async (req, res) => {
  try {
    const { dataPerPage, currentPage, filterValue } = req.query;

    let allGrievance;

    switch (filterValue) {
      case "filterbydateinc":
        allGrievance = await grievanceModel.find({}).sort({ createdAt: 1 });
        break;
      case "filterbydatedec":
        allGrievance = await grievanceModel.find({}).sort({ createdAt: -1 });
        break;
      default:
        break;
    }

    if (allGrievance.length < 1) {
      res.status(204).json({ message: "No content", data: allGrievance });
    }

    // pagination
    const totalPages = Math.ceil(allGrievance?.length / dataPerPage);
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = currentPage * dataPerPage - 1;
    const paginatedData = allGrievance.slice(startIndex, endIndex);

    res
      .status(200)
      .json({ message: "success", totalPages, data: paginatedData });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "server error", error });
  }
};

module.exports = {
  getAllGrievanceHandler,
  createGrievanceHandler,
  searchedGrievanceHandler,
  grievanceFilterHandler,
};
