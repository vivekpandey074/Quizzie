import { useState } from "react";
import addlogo from "../../../assets/add-logo.svg";
import crossbtn from "../../../assets/cross-btn.svg";
import TextOptions from "../../../components/TextOptions/TextOptions";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ResetQuiz } from "../../../redux/quizSlice";
import { toast } from "react-toastify";
import { CreateQuizApi } from "../../../api/quiz";

const initialState = {
  question: "",
  optionstype: "Text",
  correctanswerIndex: "",
  options: [
    { text: "", imageurl: "" },
    { text: "", imageurl: "" },
  ],
  timer: 0,
};

export default function CreatingQuizModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { quizname, quiztype } = useSelector((state) => state.quiz);

  const [currentquestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [questionsArray, setQuestionsArray] = useState([initialState]);

  const safeIndex =
    currentquestionIndex >= questionsArray.length ? 0 : currentquestionIndex;

  const { question, optionstype, correctanswerIndex, options, timer } =
    questionsArray[safeIndex];

  const handleRemoveQuestion = (e, questionNo) => {
    setQuestionsArray((prev) =>
      prev.filter((item, index) => index !== questionNo)
    );
  };

  const checkOption = (optionsArray, type) => {
    for (let index = 0; index < optionsArray.length; index++) {
      if (optionsArray[index][type] === "") {
        toast.error("please provide all the options");
        return false;
      }
    }

    return true;
  };

  const handleAddQuestion = () => {
    if (!question)
      return toast.error("Please provide quiz question for current tab ");

    if (optionstype === "Text") {
      if (!checkOption(options, "text")) return;
    } else if (optionstype === "ImageURL") {
      if (!checkOption(options, "imageurl")) return;
    } else if (optionstype === "Text&ImageURL") {
      if (!checkOption(options, "text")) return;
    }

    if (correctanswerIndex === "" && quiztype === "Q&A")
      return toast.error("Please provide correct option");

    setQuestionsArray((prev) => [...prev, initialState]);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSelectOptionsType = (e) => {
    setQuestionsArray(
      questionsArray.map((element, questno) => {
        if (questno === currentquestionIndex) {
          return { ...element, optionstype: e.target.value };
        } else return element;
      })
    );
  };

  const handleCancel = () => {
    dispatch(ResetQuiz());
    navigate("/dashboard");
  };

  const handleCreateQuiz = async () => {
    if (!question)
      return toast.error("Please provide quiz question for current tab ");

    if (optionstype === "Text") {
      if (!checkOption(options, "text")) return;
    } else if (optionstype === "ImageURL") {
      if (!checkOption(options, "imageurl")) return;
    } else if (optionstype === "Text&ImageURL") {
      if (!checkOption(options, "text")) return;
    }

    if (correctanswerIndex === "" && quiztype === "Q&A")
      return toast.error("Please provide correct option");

    try {
      setLoading(true);
      const response = await CreateQuizApi({
        name: quizname,
        quizType: quiztype,
        Questions: questionsArray,
      });
      setLoading(false);
      if (response.success) {
        toast.success("Quiz created successfully");
        navigate(`${response.quizID}`);
        dispatch(ResetQuiz());
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

  return (
    <div className="creating-quiz-modal">
      <div className="question-nav-bar">
        <div className="question-bar poppin-text">
          {questionsArray.map((item, index) => {
            return (
              <div
                key={index}
                className="question-btn active-shadow"
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
                {index + 1 !== 1 ? (
                  <span onClick={(e) => handleRemoveQuestion(e, index)}>
                    <img src={crossbtn} alt="" className="cross-btn" />
                  </span>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
          {questionsArray.length < 5 && (
            <img
              src={addlogo}
              alt=""
              onClick={handleAddQuestion}
              className="add-question-logo"
            />
          )}
        </div>
        <div className="max-question-text poppin-text">Max 5 questions</div>
      </div>
      <input
        type="text"
        name="question"
        id=""
        value={question}
        onChange={(e) =>
          setQuestionsArray(
            questionsArray.map((element, questno) => {
              if (questno === currentquestionIndex) {
                return { ...element, question: e.target.value };
              } else return element;
            })
          )
        }
        placeholder="Poll Question"
        className="quiz-question-input active-shadow poppin-text"
      />
      <div className="option-type-selection-bar poppin-text">
        <p>Option Type</p>
        <label className="">
          <input
            type="radio"
            value="Text"
            name="radio"
            checked={optionstype === "Text"}
            className="radio-btn"
            onChange={handleSelectOptionsType}
          />
          Text
        </label>
        <label className="">
          <input
            type="radio"
            value="ImageURL"
            name="radio"
            onChange={handleSelectOptionsType}
            checked={optionstype === "ImageURL"}
            className="radio-btn"
          />
          Image URL
        </label>
        <label className="">
          <input
            type="radio"
            value="Text&ImageURL"
            checked={optionstype === "Text&ImageURL"}
            name="radio"
            onChange={handleSelectOptionsType}
            className="radio-btn"
          />
          Text & Image URL
        </label>
      </div>
      <TextOptions
        currentquestionIndex={currentquestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        questionsArray={questionsArray}
        setQuestionsArray={setQuestionsArray}
      />
      <div className="createquiz-btn-wrapper ">
        <button
          className="createquiz-modal-btn-2 active-shadow poppin-text "
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="createquiz-modal-btn-1 poppin-text "
          onClick={handleCreateQuiz}
        >
          Create Quiz {loading ? <span className="loader"></span> : <></>}
        </button>
      </div>
    </div>
  );
}
