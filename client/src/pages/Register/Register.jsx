import { useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { RegisterUser } from "../../api/users";
import { toast } from "react-toastify";

const INVALID_NAME =
  "Invalid name: must be 3-64 long, without space, digit & special character.";

const PASSWORD_INVALID_MSG =
  "Weak password: should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!";

const regexName = new RegExp("^[a-zA-Z ]{3,64}$");
const regexEmail = new RegExp("^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const regexPassword = new RegExp(
  "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
);

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, SetError] = useState({
    name: false,
    email: false,
    password: false,
    confirmpassword: false,
  });

  const navigate = useNavigate();
  const { name, email, password, confirmpassword } = formData;

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

    if (!regexName.test(name)) {
      SetError((prev) => ({ ...prev, name: true }));
      setFormData((prev) => ({
        ...prev,
        name: INVALID_NAME,
      }));
      return;
    }

    if (!regexEmail.test(email)) {
      SetError((prev) => ({ ...prev, email: true }));
      setFormData((prev) => ({
        ...prev,
        email: "Invalid Email",
      }));
      return;
    }

    if (!regexPassword.test(password)) {
      SetError((prev) => ({ ...prev, password: true }));
      setFormData((prev) => ({
        ...prev,
        password: PASSWORD_INVALID_MSG,
      }));
      return;
    }

    if (password != confirmpassword) {
      SetError((prev) => ({ ...prev, confirmpassword: true }));
      setFormData((prev) => ({
        ...prev,
        confirmpassword: "password doesn't match",
      }));
      return;
    }

    try {
      setLoading(true);
      const response = await RegisterUser(formData);
      setLoading(false);
      if (response.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message || "Error while registering try after some time");
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
                }}
                value={name}
                className={`${error.name ? "error-text" : ""}`}
                required
              />
            </div>
            <div className="input-div">
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
            <div className="input-div">
              <label htmlFor="">Password</label>
              <input
                type={error.password ? "text" : "password"}
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={password}
                className={`${error.password ? "error-text" : ""}`}
              />
            </div>
            <div className="input-div">
              <label htmlFor="">Confirm Password</label>
              <input
                type={error.confirmpassword ? "text" : "password"}
                name="confirmpassword"
                autoComplete="false"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={confirmpassword}
                className={`${error.confirmpassword ? "error-text" : ""}`}
              />
            </div>
          </div>
          <button type="submit" className="submit-btn poppin-text">
            Sign - Up
            {loading ? <span className="loader"></span> : <></>}
          </button>
        </form>
      </div>
    </div>
  );
}
