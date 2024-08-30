import "./index.css";
import addlogo from "../../../assets/add-logo.svg";
import crossbtn from "../../../assets/cross-btn.svg";
import TextOptions from "../../../components/TextOptions/TextOptions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { EditQuizApi } from "../../../api/quiz";

export default function UpdateQuizModal() {
  const navigate = useNavigate();
  const [currentquestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [questionsArray, setQuestionsArray] = useState([]);

  const { question, optionstype, correctanswerIndex, options, timer } =
    questionsArray[currentquestionIndex];

  const handleRemoveQuestion = () => [
    toast.info("Can't remove question in edit mode"),
  ];

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
    toast.info("Can't add question in edit mode");
    return;
  };

  const handleSelectOptionsType = () => {
    toast.info("Can't edit options type in edit mode");
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const handleEditQuiz = async () => {
    if (!question)
      return toast.error("Please provide quiz question for current tab ");

    if (optionstype === "Text") {
      if (!checkOption(options, "text")) return;
    } else if (optionstype === "ImageURL") {
      if (!checkOption(options, "imageurl")) return;
    } else if (optionstype === "Text&ImageURL") {
      if (!checkOption(options, "text")) return;
    }

    try {
      setLoading(true);
      const response = await EditQuizApi({
        Questions: questionsArray,
      });
      setLoading(false);
      if (response.success) {
        toast.success("Quiz edited successfully");
        navigate(`/dashboard`);
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
    <>
      <div className="main-cont-modal"></div>
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
                    <span onClick={() => handleRemoveQuestion()}>
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
          editing={true}
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
            onClick={handleEditQuiz}
          >
            Edit Quiz {loading ? <span className="loader"></span> : <></>}
          </button>
        </div>
      </div>
    </>
  );
}
