import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../api/users";
import { toast } from "react-toastify";

const regexEmail = new RegExp("^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

export default function Login() {
  const navigate = useNavigate("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, SetError] = useState({
    email: false,
    password: false,
  });

  const { email, password } = formData;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (error[e.target.name]) {
      SetError((prev) => ({ ...prev, [e.target.name]: false }));
      setFormData((prev) => ({ ...prev, [e.target.name]: "" }));
      return;
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!regexEmail.test(email)) {
      SetError((prev) => ({ ...prev, email: true }));
      setFormData((prev) => ({
        ...prev,
        email: "Invalid Email",
      }));
      return;
    }

    try {
      setLoading(true);
      const response = await LoginUser(formData);
      setLoading(false);
      if (response.success) {
        toast.success(response.message);
        localStorage.setItem("token", response.token);
        window.location.href = "/";
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message || "Error while logging in! try after some time");
    }
  };

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

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-cont login-poppin-text">
            <div className="login-input-div">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={email}
                className={`${error.email ? "error-text" : ""}`}
                required
              />
            </div>
            <div className="login-input-div">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={password}
                required
                className={`${error.password ? "error-text" : ""}`}
              />
            </div>
          </div>
          <button type="submit" className="login-submit-btn login-poppin-text">
            Log In
            {loading ? <span className="loader"></span> : <></>}
          </button>
        </form>
      </div>
    </div>
  );
}
