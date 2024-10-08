import { axiosInstance } from "./axiosInstance";

export const CreateQuizApi = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/quiz/create", payload);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const GetAllQuizApi = async () => {
  try {
    const response = await axiosInstance.get("/api/quiz/analytics/allquiz");
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const DeleteQuizApi = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/quiz/deletequiz/${id}`);

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const GetQuizApi = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/quiz/particular/${id}`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
export const GetLiveQuizApi = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/quiz/particular-live/${id}`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const EditQuizApi = async (id, payload) => {
  try {
    const response = await axiosInstance.put(`/api/quiz/edit/${id}`, {
      payload,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const GetTrendingAndAnalyticsApi = async () => {
  try {
    const response = await axiosInstance.get(`/api/quiz/trending`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
export const UpdateImpressionApi = async (id) => {
  try {
    const response = await axiosInstance.patch(
      `/api/quiz/update-impressions/${id}`
    );
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
export const OptionAnalyticsUpdateApi = async (
  id,
  questionIndex,
  optionIndex,
  isCorrect
) => {
  try {
    const response = await axiosInstance.patch(
      `/api/quiz/update-analytics/${id}?questionIndex=${questionIndex}&optionIndex=${optionIndex}&isCorrect=${isCorrect}`
    );
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
