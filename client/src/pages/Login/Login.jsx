import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate("");
  return (
    <div className="bg-main login-main-container">
      <div className="login-container ">
        <h1 className="login-logo">QUIZZIE</h1>
        <div className="login-tab-bar">
          <button
            onClick={() => navigate("/signup")}
            className="login-btn  login-poppin-text"
          >
            Sign Up
          </button>
          <button className="login-btn login-poppin-text login-active-btn">
            Log In
          </button>
        </div>

        <form className="login-form">
          <div className="login-form-cont login-poppin-text">
            <div className="login-input-div">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="login-input-div">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
          </div>
          <button type="submit" className="login-submit-btn login-poppin-text">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
