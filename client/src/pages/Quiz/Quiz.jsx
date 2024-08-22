import PublicQuizOptions from "../../components/PublicQuizOptions/PublicQuizOptions";
import "./index.css";

export default function Quiz() {
  return (
    <div className="quiz-main-div">
      <div className="quiz-cont poppin-text">
        <div className="quiz-info-bar">
          <div className="">01/04</div>
          <div className="quiz-timer">00:10s</div>
        </div>
        <p className="quiz-question">
          Your question text comes here, its a sample text.
        </p>
        <PublicQuizOptions />
        <div className="quiz-btn-wrapper ">
          <button className="quiz-modal-btn poppin-text">NEXT</button>
        </div>
      </div>
    </div>
  );
}
