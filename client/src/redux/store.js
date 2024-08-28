import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { quizSlice } from "./quizSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    quiz: quizSlice.reducer,
  },
});

export default store;
