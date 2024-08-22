import addlogo from "../../../assets/add-logo.svg";
import crossbtn from "../../../assets/cross-btn.svg";
import TextOptions from "../../../components/TextOptions/TextOptions";
import "./index.css";

export default function CreatingQuizModal() {
  return (
    <div className="creating-quiz-modal">
      <div className="question-nav-bar">
        <div className="question-bar poppin-text">
          <div className="question-btn active-shadow">1</div>
          <div className="question-btn active-shadow">
            2
            <span>
              <img src={crossbtn} alt="" className="cross-btn" />
            </span>
          </div>

          <img src={addlogo} alt="" />
        </div>
        <div className="max-question-text poppin-text">Max 5 questions</div>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Poll Question"
        className="quiz-question-input active-shadow poppin-text"
      />
      <div className="option-type-selection-bar poppin-text">
        <p>Option Type</p>
        <label className="">
          <input type="radio" name="radio" className="radio-btn" />
          Text
        </label>
        <label className="">
          <input type="radio" name="radio" className="radio-btn" />
          Image URL
        </label>
        <label className="">
          <input type="radio" name="radio" className="radio-btn" />
          Text & Image URL
        </label>
      </div>
      <TextOptions />
      <div className="createquiz-btn-wrapper ">
        <button className="createquiz-modal-btn-2 active-shadow poppin-text ">
          Cancel
        </button>
        <button className="createquiz-modal-btn-1 poppin-text ">
          Create Quiz
        </button>
      </div>
    </div>
  );
}
