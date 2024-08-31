import "./index.css";
import eyelogo from "../../assets/eye-outline.svg";
import { useEffect, useState } from "react";
import { GetTrendingAndAnalyticsApi } from "../../api/quiz";
import { toast } from "react-toastify";

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

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [quizesData, setQuizesData] = useState({});

  useEffect(() => {
    const getDashboardAnalytics = async () => {
      try {
        setLoading(true);
        const response = await GetTrendingAndAnalyticsApi();
        setLoading(false);
        if (response.success) {
          setQuizesData(response.quizesData);
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        setLoading(false);
        toast.error(
          err.message || "Error something went wrong while creating quiz"
        );
      }
    };

    getDashboardAnalytics();
  }, []);

  const ImpressionFormat = (impressionCount) => {
    if (!impressionCount) return "0";

    if (impressionCount <= 999) {
      return impressionCount;
    }

    let result = (impressionCount / 1000).toFixed(1);
    if (result.endsWith(".0")) {
      result = result.slice(0, -2);
    }
    return result + "k";
  };

  return (
    <div className="main-box">
      {loading ? (
        <>
          <h1 className="poppin-text">Loading...</h1>
        </>
      ) : (
        <>
          {" "}
          <div className="upper-box">
            <div className="analytics-box-dashboard poppin-text">
              <div className="content-box-1 orange ">
                <div>
                  <h1 className="dashboard-heading-1">
                    <span className="numerical">
                      {quizesData?.dashboardAnalytics?.totalQuizzes || 0}{" "}
                    </span>
                    Quiz
                  </h1>
                  <h1 className="dashboard-heading-2 ">Created</h1>
                </div>
              </div>
              <div className="content-box-1 green">
                <div>
                  <h1 className="dashboard-heading-1">
                    <span className="numerical">
                      {quizesData?.dashboardAnalytics?.totalQuestions || 0}{" "}
                    </span>
                    questions
                  </h1>
                  <h1 className="dashboard-heading-2">Created</h1>
                </div>
              </div>
              <div className="content-box-1 blue">
                <div>
                  <h1 className="dashboard-heading-1">
                    <span className="numerical">
                      {ImpressionFormat(
                        quizesData?.dashboardAnalytics?.totalImpressions
                      )}{" "}
                    </span>
                    Total
                  </h1>
                  <h1 className="dashboard-heading-2">Impression</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="trending-quiz-box">
            <h1 className="heading-1 poppin-text">Trending Quizs</h1>
            <div className="trending-quizes scrollable-element ">
              {quizesData?.trendingquizes?.map((item, index) => (
                <>
                  {" "}
                  <div className="quiz-box">
                    <div className="content-box-2">
                      <h1 className="heading-3 poppin-text">
                        {item.name.length < 10
                          ? item.name
                          : item.name.slice(0, 10) + "..."}
                      </h1>
                      <div className="impression-text-box">
                        <p className="impression-text poppin-text orange">
                          {ImpressionFormat(item.impressions)}
                        </p>
                        <img src={eyelogo} alt="eyelogo" className="eye-logo" />
                      </div>
                    </div>
                    <p className="createdOn-text poppin-text green">
                      {formatedDate(item.createdAt)}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
