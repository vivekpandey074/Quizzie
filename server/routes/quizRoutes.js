const authMiddleware = require("../middleware/authMiddleware");
const { handleCreateQuiz } = require("../controllers/quiz");
const router = require("express").Router();

router.post("/create", authMiddleware, handleCreateQuiz);

module.exports = router;
