import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    modalState: "1",
    quizname: "",
    quiztype: "",
    allquiz: [],
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
    SetAllQuiz: (state, action) => {
      state.allquiz = action.payload.allquiz;
    },
  },
});

export const {
  SetModalState,
  AddQuestion,
  RemoveQuestion,
  SetQuiz,
  ResetQuiz,
  SetAllQuiz,
} = quizSlice.actions;
