import "./index.css";
import optionimg from "../../assets/optionimg.png";

export default function PublicQuizOptions({ type = "text" }) {
  return (
    <div className="options-wrapper poppin-text">
      <div className="options-div-2 ">
        <div className="option">
          {/* <p>Option 1</p> */}
          <img src={optionimg} alt="" className="option-img" />
        </div>
        <div className="option">
          <p>Option 2</p>
          {/* <img src={optionimg} alt="" /> */}
        </div>
        <div className="option image-text-option">
          <p>Sample Image</p>
          <img src={optionimg} alt="" className="option-img-2" />
        </div>
        <div className="option image-text-option">
          <p>Sample Image</p>
          <img src={optionimg} alt="" className="option-img-2" />
        </div>
      </div>
    </div>
  );
}
