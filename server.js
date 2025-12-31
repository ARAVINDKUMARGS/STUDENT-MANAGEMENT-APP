const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ very important to parse JSON

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/students", require("./routes/students")); // ✅ must exist

// Test root endpoint
app.get("/", (req, res) => res.send("Server working"));

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
