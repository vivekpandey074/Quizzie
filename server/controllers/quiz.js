const asyncHandler = require("../utils/asyncHandler");
const Quiz = require("../models/quizModel");
const ApiError = require("../utils/ApiError");

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

const handleGetAllQuiz = asyncHandler(async (req, res, next) => {
  const quizes = await Quiz.find({ createdBy: req.body.userId });

  res.status(201).send({
    success: true,
    message: "quizes fetched successfully",
    allquiz: quizes,
  });
});

const handleDeleteQuiz = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  await Quiz.deleteOne({ _id: id });

  res.status(200).send({
    success: true,
    message: "Quiz deleted successfully",
  });
});

const handleGetQuiz = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const quiz = await Quiz.findById(id);

  if (!quiz) throw new ApiError(404, "No quiz found");

  res.status(200).send({
    success: true,
    message: "quiz fetches successfully",
    quiz,
  });
});

const handleUpdateOptionsAnalytics = asyncHandler(async (req, res, next) => {
  const { quizID } = req.params;
  const { questionIndex, optionIndex, isCorrect } = req.query;

  let quiz = await Quiz.findById(quizID);

  if (!quiz) throw new ApiError(404, "quiz not found");

  if (quiz.quizType === "Poll") {
    quiz.Questions[questionIndex].options[optionIndex].pollcounts += 1;

    await quiz.save();
  } else {
    quiz.Questions[questionIndex].TotalAttempted += 1;
    isCorrect
      ? (quiz.Questions[questionIndex].AnsweredCorrectly += 1)
      : (quiz.Questions[questionIndex].AnsweredIncorrectly += 1);

    await quiz.save();
  }

  res.status(200).send({
    success: true,
    message: "analytics updated successfully",
    quiz,
  });
});

module.exports = {
  handleCreateQuiz,
  handleGetAllQuiz,
  handleDeleteQuiz,
  handleGetQuiz,
  handleUpdateOptionsAnalytics,
};
