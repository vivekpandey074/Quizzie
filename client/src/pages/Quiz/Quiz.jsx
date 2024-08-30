import { useNavigate, useParams } from "react-router-dom";
import PublicQuizOptions from "../../components/PublicQuizOptions/PublicQuizOptions";
import "./index.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetQuizApi, UpdateImpressionApi } from "../../api/quiz";

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const { Questions } = quiz;

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds <= 0) {
      // when it is last question and timer gets over we need to submit the quiz autmatically
      if (Questions && Questions.length === currentQuestionIndex + 1) {
        quiz?.quizType === "Q&A"
          ? navigate("/completion/q&a", {
              state: { score, totalQuestions: Questions.length },
            })
          : navigate("/completion/poll");

        return;
      }

      //when it is any other question, we need to update score and anlytics
      if (Questions && Questions[currentQuestionIndex]?.timer != "0") {
        setCurrentQuestionIndex((prev) => prev + 1);
      }

      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    setSelectedOption("");
    setSeconds(() => {
      if (Questions) return Questions[currentQuestionIndex]?.timer;
    });
  }, [currentQuestionIndex, Questions]);

  useEffect(() => {
    const GetLiveQuiz = async () => {
      try {
        setLoading(true);
        const response = await GetQuizApi(id);
        setLoading(false);
        if (response.success) {
          console.log(response.quiz);
          setQuiz(response.quiz);
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        setLoading(false);
        toast.error(
          err.message || "Error something went wrong while creating quiz"
        );
      }
    };

    const UpdateImpression = async () => {
      try {
        const response = await UpdateImpressionApi(id);
        if (!response.success) {
          throw new Error(response.message);
        }
      } catch (err) {
        setLoading(false);
        toast.error(
          err.message || "Error something went wrong while creating quiz"
        );
      }
    };

    GetLiveQuiz();
    UpdateImpression();
  }, []);

  const handleLiveQuizSubmit = () => {};

  const handleNext = () => {
    if (selectedOption === "") {
      toast.error("choose any option to move to next question");
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div className="quiz-main-div">
      <div className="quiz-cont poppin-text scrollable-element">
        {loading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            {" "}
            <div className="quiz-info-bar">
              <div className="">
                0{currentQuestionIndex + 1}/0{Questions?.length}
              </div>
              {Questions && Questions[currentQuestionIndex]?.timer != "0" ? (
                <div className="quiz-timer">
                  00:{seconds < 10 ? "0" + seconds : seconds}s
                </div>
              ) : (
                <></>
              )}
            </div>
            <p className="quiz-question">
              {Questions && Questions[currentQuestionIndex]?.question}
            </p>
            <PublicQuizOptions
              optionstype={
                Questions && Questions[currentQuestionIndex]?.optionstype
              }
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              options={Questions && Questions[currentQuestionIndex]?.options}
            />
            <div className="quiz-btn-wrapper ">
              <button
                className="quiz-modal-btn poppin-text"
                onClick={() => {
                  if (
                    quiz.Questions &&
                    quiz?.Questions.length === currentQuestionIndex + 1
                  ) {
                    handleLiveQuizSubmit();
                  } else {
                    handleNext();
                  }
                }}
              >
                {quiz.Questions &&
                quiz?.Questions.length === currentQuestionIndex + 1
                  ? "SUBMIT"
                  : "NEXT"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
