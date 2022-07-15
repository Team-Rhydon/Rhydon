import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {FiMinimize} from 'react-icons/fi'
import {createPortal} from 'react-dom'
import styled from 'styled-components';
import ExpandedIcons from './ExpandedIcons.jsx';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '20px',
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

let ImageModal = ({gallery, currentImage, setCurrentImage, showImageModal, setImageModal, prevSlide, nextSlide}) => {
  if (!showImageModal) return null

  return (
    <>
    <div onClick={() => setImageModal(false)} style={OVERLAY_STYLES} />
    <div style={MODAL_STYLES}>
      <BsArrowLeftCircle className="left-arrow" onClick={prevSlide}/>
      <BsArrowRightCircle className="right-arrow" onClick={nextSlide}/>
      <FiMinimize onClick={() => setImageModal(false)}/>
      <img src={currentImage.url} witdh="400px" height="400px"/>
      <ExpandedIcons gallery={gallery} currentImage={currentImage} setCurrentImage={setCurrentImage}/>
      </div>
    </>
  )
}

export default ImageModal;