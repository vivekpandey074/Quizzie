const asyncHandler = require("../utils/asyncHandler");
const Quiz = require("../models/quizModel");

const handleCreateQuiz = asyncHandler(async (req, res, next) => {
  const { name, quizType, Questions } = req.body;

  const newquiz = new Quiz({
    name,
    createdBy: req.body.userId,
    quizType,
    Questions,
  });

  await newquiz.save();

  res.status(201).send({
    success: true,
    message: "quiz created successfully",
    quizID: newquiz._id,
  });
});

module.exports = { handleCreateQuiz };
