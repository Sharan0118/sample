export default function handler(req, res) {
  const student = {
    name: "Rahul Sharma",
    progress: "75%",
    focusLevel: "Good",
    completedLessons: 12,
    pendingLessons: 3
  };

  res.status(200).json(student);
}