import { useState } from "react";
import "./index.css";
import NamingQuizModal from "./NamingQuizModal/NamingQuizModal";
import CreatingQuizModal from "./CreatingQuizModal/CreatingQuizModal";
import SharingQuizModal from "./SharingQuizModal/SharingQuizModal";

export default function CreateQuiz() {
  const [currentStep, SetCurrentStep] = useState("3");
  return (
    <>
      <div className="main-cont-modal"></div>
      {currentStep === "1" ? (
        <NamingQuizModal />
      ) : currentStep === "2" ? (
        <CreatingQuizModal />
      ) : (
        <SharingQuizModal />
      )}
    </>
  );
}
