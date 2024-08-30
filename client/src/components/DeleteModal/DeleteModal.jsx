import { useDispatch } from "react-redux";
import "./index.css";
import { useState } from "react";
import { SetAllQuiz } from "../../redux/quizSlice";
import { toast } from "react-toastify";
import { DeleteQuizApi } from "../../api/quiz";

export default function DeleteModal({ setDeleteModal, selectDeleteQuiz }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDeleteQuiz = async () => {
    try {
      setLoading(true);
      const response = await DeleteQuizApi(selectDeleteQuiz);
      setLoading(false);
      if (response.success) {
        toast.success("quiz deleted successfully");
        dispatch(SetAllQuiz({ allquiz: response.allquiz }));
        setDeleteModal(false);
      } else {
        setLoading(false);
        throw new Error(response.message);
      }
    } catch (err) {
      toast.error(
        err.message || "Error: Something went wrong while fetching delete quiz"
      );
    }
  };

  return (
    <>
      <div className="main-cont-modal"></div>
      <div className="delete-modal">
        <p className="poppin-text confirmation-text">
          Are you confirm you want to delete ?
        </p>
        <div className="btn-wrapper ">
          <button
            className="delete-modal-btn-1 poppin-text"
            onClick={handleDeleteQuiz}
          >
            Confirm Delete
            {loading ? <span className="loader"></span> : <></>}
          </button>
          <button
            className="delete-modal-btn-2 active poppin-text "
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
