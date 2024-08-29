const authMiddleware = require("../middleware/authMiddleware");
const {
  handleCreateQuiz,
  handleGetAllQuiz,
  handleDeleteQuiz,
  handleGetQuiz,
  handleUpdateOptionsAnalytics,
} = require("../controllers/quiz");
const router = require("express").Router();

router.post("/create", authMiddleware, handleCreateQuiz);
router.get("/analytics/allquiz", authMiddleware, handleGetAllQuiz);
router.delete("/deletequiz/:id", authMiddleware, handleDeleteQuiz);
router.get("/particular/:id", authMiddleware, handleGetQuiz);
router.patch(
  "/update-analytics/:quizID",
  authMiddleware,
  handleUpdateOptionsAnalytics
);

module.exports = router;
