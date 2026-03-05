const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const student = {
    name: "Rahul Sharma",
    progress: "75%",
    focusLevel: "Good",
    completedLessons: 12,
    pendingLessons: 3
};

app.get("/api/student", (req, res) => {
    res.json(student);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});