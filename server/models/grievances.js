const mongoose = require("mongoose");

const grievanceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    grievance: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const grievanceModel = mongoose.model("grievances", grievanceSchema);

module.exports = grievanceModel;
