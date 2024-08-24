const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    quizType: {
      type: String,
      required: true,
      trim: true,
    },
    impressions: {
      type: Number,
      default: 0,
    },
    Questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const quiz = mongoose.model("quizes", quizSchema);

module.exports = quiz;
