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
    Questions: {
      type: [
        {
          question: { type: String, required: true },
          correctanswerIndex: { type: String },
          options: [
            {
              type: [
                {
                  text: {
                    type: String,
                  },
                  imageurl: {
                    type: String,
                  },
                },
              ],
              required: true,
            },
          ],
          timer: { type: Number },
          optionstype: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const quiz = mongoose.model("quizes", quizSchema);

module.exports = quiz;
