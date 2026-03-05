export default function handler(req, res) {
  res.status(200).json({
    name: "Rahul Sharma",
    progress: "75%",
    focusLevel: "Good",
    completedLessons: 12,
    pendingLessons: 3
  });
}