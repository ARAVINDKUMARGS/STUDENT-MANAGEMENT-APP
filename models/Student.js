const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  department: String,
  year: Number,
  email: String,
  phone: String
});

module.exports = mongoose.model("Student", studentSchema);
