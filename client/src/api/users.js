import { axiosInstance } from "./axiosInstance";

export const RegisterUser = async (payload) => {
  console.log("hellos");
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    console.log(response);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payload);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/api/users/getcurrentuser");
    return response.data;
  } catch (err) {
    return err.response.data || err.message;
  }
};
