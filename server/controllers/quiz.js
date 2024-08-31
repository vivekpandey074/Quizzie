const asyncHandler = require("../utils/asyncHandler");
const Quiz = require("../models/quizModel");
const ApiError = require("../utils/ApiError");
const mongoose = require("mongoose");

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

  const allquiz = await Quiz.find({ createdBy: req.body.userId });

  res.status(200).send({
    success: true,
    message: "Quiz deleted successfully",
    allquiz,
  });
});

const handleGetQuiz = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

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

  if (quiz.quizType === "Poll" && optionIndex) {
    quiz.Questions[questionIndex].options[optionIndex].pollcounts += 1;
    await quiz.save();
  } else if (quiz.quizType === "Q&A") {
    quiz.Questions[questionIndex].TotalAttempted += 1;

    console.log(isCorrect);
    if (isCorrect == "true") {
      console.log("Inside correct");
      console.log(isCorrect);
      quiz.Questions[questionIndex].AnsweredCorrectly += 1;
    } else {
      console.log("Insider incorrect");
      quiz.Questions[questionIndex].AnsweredIncorrectly += 1;
    }

    await quiz.save();
  }

  res.status(200).send({
    success: true,
    message: "analytics updated successfully",
    quiz,
  });
});

const handleUpdateImpression = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const updatedquiz = await Quiz.findById(id);

  if (!updatedquiz) throw new ApiError(404, "quiz not found");

  updatedquiz.impressions += 1;

  await updatedquiz.save();

  res.status(200).send({
    success: true,
    message: "impression updated successfully",
  });
});

const handleGetTrendingQuizes = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  const trendingquizes = await Quiz.find({
    createdBy: userId,
    impressions: {
      $gt: 10,
    },
  });

  let dashboardAnalytics = await Quiz.aggregate([
    {
      $match: { createdBy: new mongoose.Types.ObjectId(userId) },
    },
    {
      $group: {
        _id: null,
        totalImpressions: { $sum: "$impressions" },
        totalQuizzes: { $sum: 1 },
        totalQuestions: { $sum: { $size: "$Questions" } },
      },
    },
  ]);

  dashboardAnalytics = dashboardAnalytics[0];

  res.status(200).send({
    success: true,
    message: "trending quiz fetched successfully",
    quizesData: { trendingquizes, dashboardAnalytics },
  });
});

const handleUpdateQuiz = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { payload } = req.body;

  await Quiz.findByIdAndUpdate(id, payload);

  const allquiz = await Quiz.find({ createdBy: req.body.userId });

  res.status(201).send({
    success: true,
    message: "quiz updated successfully",
    allquiz,
  });
});

module.exports = {
  handleCreateQuiz,
  handleGetAllQuiz,
  handleDeleteQuiz,
  handleGetQuiz,
  handleUpdateOptionsAnalytics,
  handleUpdateImpression,
  handleGetTrendingQuizes,
  handleUpdateQuiz,
};
