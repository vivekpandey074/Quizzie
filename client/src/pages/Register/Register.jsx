import { useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";

const INVALID_NAME =
  "Invalid name: must be 3-64 long, without space, digit & special character.";

const PASSWORD_INVALID_MSG =
  "Weak password: should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!";

const patObj = {
  name: "^[a-zA-Z ]{3,64}$",
  password:
    "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
};

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // const [submit, SetSubmit] = useState(false);

  const [error, SetError] = useState({
    name: false,
    email: false,
    password: false,
    confirmpassword: false,
  });

  const navigate = useNavigate();
  const { name, email, password, confirmpassword } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // SetSubmit(true);

    if (error.name) {
      setFormData((prev) => ({
        ...prev,
        name: INVALID_NAME,
      }));
      return;
    }

    if (error.email) {
      setFormData((prev) => ({
        ...prev,
        email: "Invalid Email",
      }));
      return;
    }

    if (error.password) {
      setFormData((prev) => ({
        ...prev,
        password: PASSWORD_INVALID_MSG,
      }));
      return;
    }

    if (error.confirmpassword) {
      setFormData((prev) => ({
        ...prev,
        confirmpassword: PASSWORD_INVALID_MSG,
      }));
      return;
    }

    if (password != confirmpassword) {
      SetError((prev) => ({ ...prev, [e.target.name]: true }));
      setFormData((prev) => ({
        ...prev,
        confirmpassword: "password doesn't match",
      }));
      return;
    }
  };

  return (
    <div className="bg-main main-container">
      <div className="container ">
        <h1 className="logo">QUIZZIE</h1>
        <div className="tab-bar">
          <button className="btn active-btn poppin-text">Sign Up</button>
          <button
            onClick={() => navigate("/login")}
            className="btn poppin-text"
          >
            Log In
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-cont poppin-text">
            <div className="input-div ">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  handleChange(e);
                  // if (e.target.checkValidity()) {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: false }));
                  // } else {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: true }));
                  // }
                }}
                value={name}
                className={`${error.name ? "error-text" : ""}`}
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                  // if (e.target.checkValidity()) {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: false }));
                  // } else {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: true }));
                  // }
                }}
                value={email}
                className={`${error.email ? "error-text" : ""}`}
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                  // if (e.target.checkValidity()) {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: false }));
                  // } else {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: true }));
                  // }
                }}
                value={password}
                className={`${error.password ? "error-text" : ""}`}
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                onChange={(e) => {
                  handleChange(e);
                  // if (e.target.checkValidity()) {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: false }));
                  // } else {
                  //   SetError((prev) => ({ ...prev, [e.target.name]: true }));
                  // }
                }}
                value={confirmpassword}
                className={`${error.confirmpassword ? "error-text" : ""}`}
              />
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
