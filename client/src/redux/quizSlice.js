import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    modalState: "1",
    quizname: "",
    quiztype: "",
  },
  reducers: {
    SetModalState: (state, action) => {
      state.modalState = action.payload;
    },

    SetQuiz: (state, action) => {
      state.quizname = action.payload.quizname;
      state.quiztype = action.payload.quiztype;
    },
    ResetQuiz: (state) => {
      state.name = "";
      state.quiztype = "";
      state.modalState = "1";
    },
  },
});

export const {
  SetModalState,
  AddQuestion,
  RemoveQuestion,
  SetQuiz,
  ResetQuiz,
} = quizSlice.actions;
