import React from 'react';
import {createPortal} from 'react-dom';
// import styled from 'styled-components';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0 , .7)',
  zIndex: 1000
}

let ImageModal = ({gallery, currentImage, setCurrentImage, showImageModal, setImageModal}) => {
  if (!showImageModal) return null;

  return (
    <>
    <div onClick={() => setImageModal(false)} style={OVERLAY_STYLES} />
    <div style={MODAL_STYLES}>
      <button onClick={() => setImageModal(false)}> close</button>
      <img src={currentImage.url}/>
      </div>
    </>
  )
}

export default ImageModal;