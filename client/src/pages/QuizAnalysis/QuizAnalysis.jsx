import { useParams } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetQuizApi } from "../../api/quiz";

export default function QuizAnalysis() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState({});
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const GetQuiz = async () => {
      try {
        setLoading(true);
        const response = await GetQuizApi(id);
        setLoading(false);

        if (response.success) {
          setQuiz(response.quiz);
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        setLoading(false);
        toast.error(err.message || "Error occured while fetching quiz");
      }
    };

    GetQuiz();
  }, []);

  return (
    <div className="main-cont-analysis   poppin-text">
      {loading ? (
        <>
          <h1 className="poppin-text">Loading...</h1>
        </>
      ) : (
        <>
          <div className="heading-box">
            <h1 className="blue">{quiz.name} Question Analysis</h1>
            <div className="orange info-box">
              <h3>Created On: {formatedDate(quiz?.createdAt)}</h3>
              <h3>Impression: {quiz?.impressions}</h3>
            </div>
          </div>
          <div className="questions-cont scrollable-element">
            {quiz?.Questions?.map((quest, index) => (
              <>
                <div className="question-box">
                  <p className="question">
                    <span>Q.{index + 1}</span> {quest?.question} ?
                  </p>
                  <div className="question-analytics-box">
                    <div className="analytics-box ">
                      <p className="numerical-text">60</p>
                      <p className="text-2">people Attempted this question</p>
                    </div>
                    <div className="analytics-box">
                      <p className="numerical-text">38</p>
                      <p className="text-2">people Answered Correctly</p>
                    </div>
                    <div className="analytics-box">
                      <p className="numerical-text">22</p>
                      <p className="text-2">people Answered Incorrectly</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
