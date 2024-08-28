import { useState } from "react";
import "./index.css";
import NamingQuizModal from "./NamingQuizModal/NamingQuizModal";
import CreatingQuizModal from "./CreatingQuizModal/CreatingQuizModal";
import SharingQuizModal from "./SharingQuizModal/SharingQuizModal";
import { useSelector } from "react-redux";

export default function CreateQuiz() {
  const { modalState } = useSelector((state) => state.quiz);
  return (
    <>
      <div className="main-cont-modal"></div>
      {modalState === "1" ? <NamingQuizModal /> : <CreatingQuizModal />}
    </>
  );
}
