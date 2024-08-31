import { toast } from "react-toastify";
import "./index.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Main() {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out succesfully");
    navigate("/login");
  };

  return (
    <div className="bg-container">
      <div className="left-panel">
        <h1 className="logo">QUIZZIE</h1>
        <div className="nav poppin-text">
          <div
            className={`nav-btn ${active === "dashboard" ? "active" : ""} `}
            onClick={() => {
              setActive("dashboard");
              navigate("/");
            }}
          >
            Dashboard
          </div>
          <div
            className={`nav-btn ${active === "analytics" ? "active" : ""} `}
            onClick={() => {
              setActive("analytics");
              navigate("/analytics");
            }}
          >
            Analytics
          </div>
          <div
            className={`nav-btn  `}
            onClick={() => {
              setActive("dashboard");
              navigate("/create");
            }}
          >
            Create Quiz
          </div>
        </div>
        <div className="logout-btn poppin-text" onClick={handleLogout}>
          LOGOUT
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
