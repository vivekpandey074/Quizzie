import "./index.css";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="bg-container">
      <div className="left-panel">
        <h1 className="logo">QUIZZIE</h1>
        <div className="nav poppin-text">
          <div className="nav-btn  active">Dashboard</div>
          <div className="nav-btn ">Analytics</div>
          <div className="nav-btn ">Create Quiz</div>
        </div>
        <div className="logout-btn poppin-text">LOGOUT</div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
