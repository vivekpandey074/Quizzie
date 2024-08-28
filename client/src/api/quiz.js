import { axiosInstance } from "./axiosInstance";

export const CreateQuizApi = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/quiz/create", payload);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
