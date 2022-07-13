import React, {useState} from "react";
import NewReviewForm from "./NewReviewForm.jsx";

const Modal = (props) => {
  if (!props.show){
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={event=> event.stopPropagation()}>
        <div className="modal-header">
          {/* Write Your Review! */}
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>

      </div>

    </div>
  )
}

export default Modal;