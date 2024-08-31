import "./index.css";
import crossbtn from "../../../assets/cross-btn.svg";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
export default function SharingQuizModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleCopytoClipboard = () => {
    navigator.clipboard.writeText(
      `https://quizzie-roughwork.onrender.com/live-quiz/${id}`
    );
    toast.success("Link copied to Clipboard");
  };

  return (
    <>
      <div className="main-cont-modal"></div>
      <div className="sharing-modal">
        <img
          src={crossbtn}
          alt=""
          className="sharing-cross-btn"
          onClick={() => navigate("/dashboard")}
        />
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
          <button
            className="sharing-modal-btn poppin-text"
            onClick={handleCopytoClipboard}
          >
            Share
          </button>
        </div>
      </div>
    </>
  );
}
