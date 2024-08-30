import "./index.css";
import sharelogo from "../../assets/share-logo.svg";
import editlogo from "../../assets/edit-logo.svg";
import deletelogo from "../../assets/delete-logo.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { GetAllQuizApi } from "../../api/quiz";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetAllQuiz } from "../../redux/quizSlice";
import UpdateQuizModal from "../CreateQuiz/UpdateQuizModal/UpdateQuizModal";

const options = {
  year: "numeric", // e.g., 2024
  month: "long", // e.g., April
  day: "numeric", // e.g., 26
};

const formatedDate = (time) => {
  const date = new Date(time);

  return (
    date.getDate() +
    " " +
    date.toLocaleString("default", { month: "long" }).slice(0, 3) +
    ", " +
    date.getFullYear()
  );
};

export default function Analytics() {
  const dispatch = useDispatch();
  const { allquiz } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectDeleteQuiz, setSelectDeleteQuiz] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectEditQuiz, setSelectEditQuiz] = useState("");

  const handleCopytoClipboard = (id) => {
    navigator.clipboard.writeText(`http://localhost:5173/live-quiz/${id}`);
    toast.success("Link copied to Clipboard");
  };

  useEffect(() => {
    const GetAllUserQuiz = async () => {
      try {
        setLoading(true);
        const response = await GetAllQuizApi();
        setLoading(false);
        if (response.success) {
          dispatch(SetAllQuiz({ allquiz: response.allquiz }));
        } else {
          setLoading(false);
          throw new Error(response.message);
        }
      } catch (err) {
        toast.error(
          err.message || "Error: Something went wrong while fetching all quizes"
        );
      }
    };

    GetAllUserQuiz();
  }, []);

  return (
    <>
      <div className="main-cont">
        <h1 className="poppin-text heading-1">Quiz Analysis</h1>
        <div className="scroll-wrapper scrollable-element ">
          {loading ? (
            <>
              <p className="poppin-text">Loading...</p>
            </>
          ) : (
            <table id="quiz-table" className="poppin-text">
              <tr>
                <th className="rounded-left">S.No</th>
                <th>Quiz Name</th>
                <th>Created On</th>
                <th>Impression</th>
                <th></th>
                <th className="rounded-right"></th>
              </tr>
              {allquiz.map((quizitem, index) => (
                <>
                  <tr>
                    <td className="rounded-left">{index + 1}</td>
                    <td>{quizitem.name}</td>
                    <td> {formatedDate(quizitem.createdAt)}</td>
                    <td>{quizitem.impressions}</td>
                    <td className="btn-bar">
                      <img
                        src={editlogo}
                        alt=""
                        className="analysis-btn-bar"
                        onClick={() => {
                          setShowEditModal(true);
                          setSelectEditQuiz(quizitem);
                        }}
                      />
                      <img
                        src={deletelogo}
                        alt=""
                        className="analysis-btn-bar"
                        onClick={() => {
                          setDeleteModal(true);
                          setSelectDeleteQuiz(() => quizitem?._id);
                        }}
                      />
                      <img
                        src={sharelogo}
                        alt=""
                        className="analysis-btn-bar"
                        onClick={() => handleCopytoClipboard(quizitem?._id)}
                      />
                    </td>
                    <td
                      className="question-text rounded-right"
                      onClick={() => navigate(`/analytics/${quizitem._id}`)}
                    >
                      Question wise Analysis
                    </td>
                  </tr>
                </>
              ))}
            </table>
          )}
        </div>
        <div className="additional-text-box">
          <p className="additional-text poppin-text">
            &#123; more quiz can be added &#125;
          </p>
        </div>
      </div>
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          selectDeleteQuiz={selectDeleteQuiz}
        />
      )}
      {showEditModal && (
        <UpdateQuizModal
          setShowEditModal={setShowEditModal}
          selectEditQuiz={selectEditQuiz}
        />
      )}
    </>
  );
}
