import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="bg-main main-container">
      <div className="container ">
        <h1 className="logo">QUIZZIE</h1>
        <div className="tab-bar">
          <button className="btn active-btn poppin-text">Sign Up</button>
          <button
            onClick={() => navigate("/login")}
            className="btn  poppin-text"
          >
            Log In
          </button>
        </div>

        <form className="form">
          <div className="form-cont poppin-text">
            <div className="input-div ">
              <label htmlFor="">Name</label>
              <input type="text" className="error-text" />
            </div>
            <div className="input-div">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="input-div">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
            <div className="input-div">
              <label htmlFor="">Confirm Password</label>
              <input type="password" />
            </div>
          </div>
          <button type="submit" className="submit-btn poppin-text">
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
}
