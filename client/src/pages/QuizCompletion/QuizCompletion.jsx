import "./index.css";
import trophy from "../../assets/trophy.svg";

export default function QuizCompletion() {
  return (
    <div className="quiz-main-div">
      <div className="quiz-cont poppin-text">
        <div className="completion-cont">
          <p className="congrats-text"> Congrats Quiz is completed</p>
          <img src={trophy} alt="" className="trophy-img" />
          <p className="score-text">
            Your Score is <span className="green">03/04</span>
          </p>
        </div>
      </div>
    </div>
  );
}
