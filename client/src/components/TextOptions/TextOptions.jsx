import deletelogo from "../../assets/delete-logo.svg";
import "./index.css";
export default function TextOptions() {
  return (
    <div className="text-options-cont">
      <div className="text-options-cont-2 ">
        <div className="">
          <input type="radio" name="radio-2" className="radio-btn-options" />
          <input
            type="text"
            className="options-input poppin-text active-shadow"
            placeholder="Text"
          />
          <input
            type="text"
            className="options-input poppin-text active-shadow input-2"
            placeholder="Image URL"
          />
        </div>
        <div className="">
          <input
            type="radio"
            name="radio-2"
            className="radio-btn-options poppin-text"
          />
          <input
            type="text"
            className=" options-input poppin-text active-shadow"
            placeholder="Text"
          />
          <input
            type="text"
            className=" options-input  poppin-text active-shadow input-2"
            placeholder="Image URL"
          />
        </div>
        <div className="">
          <input type="radio" name="radio-2" className="radio-btn-options " />

          <input
            type="text"
            className="options-input active-shadow  poppin-text"
            placeholder="Text"
          />
          <input
            type="text"
            className="options-input  active-shadow input-2 poppin-text"
            placeholder="Image URL"
          />

          <img src={deletelogo} alt="" className="delete-option" />
        </div>
        <div className="poppin-text active-shadow options-input btn-add-option ">
          Add Option
        </div>
      </div>
      <div className="timer-box poppin-text">
        <p>Timer</p>
        <div className="sec-box  red">OFF</div>
        <div className="sec-box active-shadow">5 sec</div>
        <div className="sec-box active-shadow">10 sec</div>
      </div>
    </div>
  );
}
