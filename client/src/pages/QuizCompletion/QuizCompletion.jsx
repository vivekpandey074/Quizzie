import "./index.css";
import trophy from "../../assets/trophy.svg";
import { useLocation } from "react-router-dom";

export default function QuizCompletion() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {};
  return (
    <div className="quiz-main-div">
      <div className="quiz-cont poppin-text">
        <div className="completion-cont">
          <p className="congrats-text"> Congrats Quiz is completed</p>
          <img src={trophy} alt="" className="trophy-img" />
          <p className="score-text">
            Your Score is{" "}
            <span className="green">
              0{score}/0{totalQuestions}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
