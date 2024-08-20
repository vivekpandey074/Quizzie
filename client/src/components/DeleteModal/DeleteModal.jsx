import React from "react";
import "./index.css";
export default function DeleteModal() {
  return (
    <>
      <div className="main-cont-modal"></div>
      <div className="modal">
        <p className="poppin-text confirmation-text">
          Are you confirm you want to delete ?
        </p>
        <div className="btn-wrapper ">
          <button className="modal-btn-1 poppin-text">Confirm Delete</button>
          <button className="modal-btn-2 active poppin-text ">Cancel</button>
        </div>
      </div>
    </>
  );
}
