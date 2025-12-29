const express = require("express");
const cors = require("cors");
const { db, admin } = require("./firebaseAdmin"); // your firebase admin config
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => res.send("Backend is working!"));

// Students API
app.post("/students", async (req, res) => {
  try {
    const { name, class: studentClass } = req.body;
    await db.collection("students").add({ name, class: studentClass, createdAt: new Date() });
    res.json({ message: "Student added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/students", async (req, res) => {
  try {
    const snapshot = await db.collection("students").get();
    const students = snapshot.docs.map(doc => doc.data());
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(` Server running on http://0.0.0.0:${PORT}`));
