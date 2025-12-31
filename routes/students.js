const express = require("express");
const router = express.Router();
const Student = require("../models/Student"); // your model

// CREATE student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
// Update student by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return updated document
        );
        if (!updatedStudent) {
            return res.status(404).send('Student not found');
        }
        res.json(updatedStudent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Delete student by ID
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
