import React from "react";
import trophy from "../../assets/trophy.svg";

export default function QuizCompletion() {
  return (
    <div className="completion-main-div">
      <div className="completion-cont">
        <p> Congrats Quiz is completed</p>
        <img src={trophy} alt="" />
        <p>
          Your Score is <span className="green">03/04</span>
        </p>
      </div>
    </div>
  );
}
