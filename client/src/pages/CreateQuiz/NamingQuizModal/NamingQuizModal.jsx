import "./index.css";

export default function NamingQuizModal() {
  return (
    <div className="naming-modal">
      <input
        type="text"
        name=""
        id=""
        placeholder="Quiz name"
        className="quiz-name-input active-shadow poppin-text"
      />

      <div className="type-selection-box poppin-text">
        <p className="text-1">Quiz Type</p>
        <div className="btn-quiz-type-1 active-shadow">Q & A</div>
        <div className="btn-quiz-type-1 active-shadow">Poll Type</div>
      </div>
      <div className="naming-btn-wrapper ">
        <button className="naming-modal-btn-2 active-shadow poppin-text ">
          Cancel
        </button>
        <button className="naming-modal-btn-1 poppin-text ">Continue</button>
      </div>
    </div>
  );
}
