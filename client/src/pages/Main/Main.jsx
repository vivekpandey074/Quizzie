import { toast } from "react-toastify";
import "./index.css";
import { Outlet, useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

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
            className="nav-btn  active"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </div>
          <div className="nav-btn " onClick={() => navigate("/analytics")}>
            Analytics
          </div>
          <div className="nav-btn " onClick={() => navigate("/create")}>
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
