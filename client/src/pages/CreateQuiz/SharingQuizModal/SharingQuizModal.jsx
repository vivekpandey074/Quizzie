import "./index.css";
import crossbtn from "../../../assets/cross-btn.svg";

export default function SharingQuizModal() {
  return (
    <>
      <div className="main-cont-modal"></div>
      <div className="sharing-modal">
        <img src={crossbtn} alt="" className="sharing-cross-btn" />
        <p className="poppin-text congratulation-text">
          Congrats your Quiz is Published!
        </p>
        <input
          type="text"
          className="link-text-div poppin-text"
          disabled
          placeholder="your link is here"
        />
        <div className="sharing-btn-wrapper ">
          <button className="sharing-modal-btn poppin-text">Share</button>
        </div>
      </div>
    </>
  );
}
