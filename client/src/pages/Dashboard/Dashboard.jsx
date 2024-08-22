import "./index.css";
import eyelogo from "../../assets/eye-outline.svg";

export default function Dashboard() {
  return (
    <div className="main-box">
      <div className="upper-box">
        <div className="analytics-box poppin-text">
          <div className="content-box-1 orange ">
            <div>
              <h1 className="heading-1">
                <span className="numerical"> 12 </span> Quiz
              </h1>
              <h1 className="heading-2 ">Created</h1>
            </div>
          </div>
          <div className="content-box-1 green">
            <div>
              <h1 className="heading-1">
                <span className="numerical"> 110 </span>questions
              </h1>
              <h1 className="heading-2">Created</h1>
            </div>
          </div>
          <div className="content-box-1 blue">
            <div>
              <h1 className="heading-1">
                <span className="numerical"> 1.4K </span>
                Total
              </h1>
              <h1 className="heading-2">Impression</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-quiz-box">
        <h1 className="heading-1 poppin-text">Trending Quizs</h1>
        <div className="trending-quizes scrollable-element">
          <div className="quiz-box">
            <div className="content-box-2">
              <h1 className="heading-3 poppin-text">Quiz 1</h1>
              <div className="impression-text-box">
                <p className="impression-text poppin-text orange">667</p>
                <img src={eyelogo} alt="eyelogo" className="eye-logo" />
              </div>
            </div>
            <p className="createdOn-text poppin-text green">
              Created On: 04 Sep, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
