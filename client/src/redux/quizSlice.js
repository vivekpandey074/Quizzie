import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    modalState: "1",
    // questions: [],
    quizname: "",
    quiztype: "",
  },
  reducers: {
    SetModalState: (state, action) => {
      state.modalState = action.payload;
    },
    // AddQuestion: (state, action) => {
    //   state.questions = [...state.questions, action.payload];
    // },
    // RemoveQuestion: (state, action) => {
    //   state.questions = state.questions.filter(
    //     (item) => item.id != action.payload
    //   );
    // },
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
