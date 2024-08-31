const express = require("express");
require("dotenv").config();
const dbConfig = require("./utils/dbConfig.js");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRoutes.js");
const quizRouter = require("./routes/quizRoutes.js");

const PORT = process.env.PORT || 5000;

const corsoptions = {
  origin: "https://quizzie-roughwork.onrender.com",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};
app.use(cors(corsoptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRouter);
app.use("/api/quiz", quizRouter);

app.listen(PORT, () => {
  console.log(`server listening on PORT:${PORT} `);
});
