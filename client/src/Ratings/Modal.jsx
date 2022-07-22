import React, {useState} from "react";
import NewReviewForm from "./NewReviewForm.jsx";

const Modal = (props) => {
  if (!props.show){
    return null;
  }
  return (
    <div className="ratings-modal" onClick={props.onClose}>
      <div className="ratings-modal-content" onClick={event=> event.stopPropagation()}>
        <div className="ratings-modal-header">
          {props.title}
          <button onClick={props.onClose} className="modal-button">X</button>
        </div>
        <div className="ratings-modal-body">
          {props.children}
        </div>
        <div className="ratings-modal-footer container-btn">

        </div>
      </div>
    </div>
  )
}

export default Modal;