import deletelogo from "../../assets/delete-logo.svg";
import "./index.css";
import { useSelector } from "react-redux";

export default function TextOptions({
  currentquestionIndex,
  setCurrentQuestionIndex,
  questionsArray,
  setQuestionsArray,
  editing,
}) {
  const safeIndex =
    currentquestionIndex >= questionsArray.length ? 0 : currentquestionIndex;
  const { question, optionstype, correctanswerIndex, options, timer } =
    questionsArray[safeIndex];
  const { quiztype } = useSelector((state) => state.quiz);

  const handleAddOption = () => {
    setQuestionsArray(
      questionsArray.map((element, index) => {
        if (index === currentquestionIndex) {
          return {
            ...element,
            options: [...options, { text: "", imageurl: "" }],
          };
        } else return element;
      })
    );
  };

  const handleRemoveOption = (index) => {
    setQuestionsArray(
      questionsArray.map((element, j) => {
        if (j === currentquestionIndex) {
          return {
            ...element,
            options: options.filter((item, i) => index !== i),
          };
        } else return element;
      })
    );
  };

  const handleOptionsInputChange = (e, type, index) => {
    setQuestionsArray(
      questionsArray.map((element, j) => {
        if (j === currentquestionIndex) {
          return {
            ...element,
            options: options.map((element2, i) => {
              if (i === index) {
                return { ...element2, [type]: e.target.value };
              } else return element2;
            }),
          };
        } else return element;
      })
    );
  };

  const handleSetTimer = (time) => {
    setQuestionsArray(
      questionsArray.map((element, j) => {
        if (j === currentquestionIndex) {
          return {
            ...element,
            timer: time,
          };
        } else return element;
      })
    );
  };

  return (
    <div className="text-options-cont">
      <div className="text-options-cont-2 ">
        {options.map((item, index) => (
          <>
            {" "}
            <div className="">
              <input
                type="radio"
                name="radio-2"
                className={`radio-btn-options ${
                  quiztype === "Poll" ? "hidden-2" : ""
                }`}
                onChange={() =>
                  setQuestionsArray(
                    questionsArray.map((element, j) => {
                      if (j === currentquestionIndex) {
                        return {
                          ...element,
                          correctanswerIndex: index,
                        };
                      } else return element;
                    })
                  )
                }
                checked={
                  correctanswerIndex !== "" && index === correctanswerIndex
                }
              />

              {(optionstype === "Text" || optionstype === "Text&ImageURL") && (
                <input
                  type="text"
                  className={`options-input active-shadow  poppin-text ${
                    correctanswerIndex !== "" && correctanswerIndex === index
                      ? "correct-answer-select"
                      : ""
                  } ${optionstype === "Text" ? "only-text-input" : ""} `}
                  placeholder="Text"
                  value={options[index].text}
                  onChange={(e) => {
                    handleOptionsInputChange(e, "text", index);
                  }}
                />
              )}

              {(optionstype === "ImageURL" ||
                optionstype === "Text&ImageURL") && (
                <input
                  type="text"
                  className={`options-input  active-shadow input-2 poppin-text ${
                    correctanswerIndex !== "" && correctanswerIndex === index
                      ? "correct-answer-select"
                      : ""
                  } ${
                    optionstype === "ImageURL"
                      ? "only-image-input"
                      : optionstype === "Text&ImageURL"
                      ? "gap-options"
                      : ""
                  }`}
                  placeholder="Image URL"
                  value={options[index].imageurl}
                  onChange={(e) => {
                    handleOptionsInputChange(e, "imageurl", index);
                  }}
                />
              )}

              {index >= 2 && (
                <img
                  src={deletelogo}
                  alt=""
                  className="delete-option"
                  onClick={() => handleRemoveOption(index)}
                />
              )}
            </div>
          </>
        ))}

        {options.length < 4 && (
          <div
            className="poppin-text active-shadow options-input btn-add-option "
            onClick={handleAddOption}
          >
            Add Option
          </div>
        )}
      </div>
      <div className="timer-box poppin-text">
        <p>Timer</p>
        <div
          className={`sec-box active-shadow  ${timer === 0 ? "red" : ""}`}
          onClick={() => handleSetTimer(0)}
        >
          OFF
        </div>
        <div
          className={`sec-box active-shadow  ${timer === 5 ? "red" : ""}`}
          onClick={() => handleSetTimer(5)}
        >
          5 sec
        </div>
        <div
          className={`sec-box active-shadow  ${timer === 10 ? "red" : ""}`}
          onClick={() => handleSetTimer(10)}
        >
          10 sec
        </div>
      </div>
    </div>
  );
}
