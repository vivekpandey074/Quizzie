import "./index.css";
import defaultimg from "../../assets/defaultimage.jpg";

export default function PublicQuizOptions({
  optionstype,
  selectedOption,
  setSelectedOption,
  options,
}) {
  return (
    <div className="options-wrapper poppin-text">
      <div className="options-div-2 ">
        {options?.map((item, index) => (
          <>
            <div
              className={`option scrollable-element ${
                optionstype === "Text&ImageURL" ? "image-text-option" : ""
              } ${index === selectedOption ? "live-selected-option" : ""}`}
              onClick={() => setSelectedOption(index)}
            >
              {optionstype !== "ImageURL" ? <p>{item.text}</p> : <></>}
              {optionstype !== "Text" ? (
                <img
                  src={item.imageurl || defaultimg}
                  alt=""
                  className={` ${
                    optionstype === "ImageURL" ? "option-img" : "option-img-2"
                  } `}
                />
              ) : (
                <></>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
