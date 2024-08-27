import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GetCurrentUser } from "../../api/users";
import { SetUser } from "../../redux/userSlice";

export default function ProtectedPage({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validateToken = async () => {
    try {
      setLoading(true);
      const response = await GetCurrentUser();
      setLoading(false);
      if (response.success) {
        dispatch(SetUser(response.currentUser));
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message || "Error occured while validating user");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      toast.info("Please login to continue", {
        position: top,
      });

      localStorage.removeItem("token");
      navigate("/login");
    }
  }, []);

  return children;
}
