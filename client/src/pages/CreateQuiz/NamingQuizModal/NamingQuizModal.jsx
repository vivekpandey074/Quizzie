import { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResetQuiz, SetModalState, SetQuiz } from "../../../redux/quizSlice";

const regQuizName = new RegExp("^[a-zA-Z0-9 ._-]+$");

export default function NamingQuizModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quizname, setQuizName] = useState("");
  const [quiztype, setQuizType] = useState("");

  const handleCancel = () => {
    dispatch(ResetQuiz());
    navigate("/");
  };

  const handleContinue = () => {
    if (!regQuizName.test(quizname)) {
      toast.error("Please enter valid quiz name");
      return;
    }
    if (!quiztype) {
      toast.error("Please enter quiz type");
      return;
    }
    dispatch(SetQuiz({ quizname, quiztype }));
    dispatch(SetModalState("2"));
  };

  return (
    <div className="naming-modal">
      <input
        type="text"
        name="quizname"
        placeholder="Quiz name"
        value={quizname}
        onChange={(e) => setQuizName(e.target.value)}
        required
        className="quiz-name-input active-shadow poppin-text"
      />

      <div className="type-selection-box poppin-text">
        <p className="text-1">Quiz Type</p>
        <div
          className={`btn-quiz-type-1 active-shadow ${
            quiztype === "Q&A" ? "select-type" : ""
          }`}
          onClick={() => {
            setQuizType("Q&A");
          }}
        >
          Q & A
        </div>
        <div
          className={`btn-quiz-type-1 active-shadow ${
            quiztype === "Poll" ? "select-type" : ""
          }`}
          onClick={() => {
            setQuizType("Poll");
          }}
        >
          Poll Type
        </div>
      </div>

      <div className="naming-btn-wrapper">
        <button
          className="naming-modal-btn-2 active-shadow poppin-text "
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="naming-modal-btn-1 poppin-text "
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
