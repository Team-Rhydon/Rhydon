/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import fillIn from '../../assets/icons/nofound.png';
import {FiMinimize} from 'react-icons/fi';
import {createPortal} from 'react-dom';
import ExpandedIcons from './ExpandedIcons.jsx';

const ImageModal = ({gallery, currentImage, setCurrentImage, showImageModal, setImageModal, prevSlide, nextSlide}) => {
  if (!showImageModal) return null;

  return (
    <>
      <div className="i-overlay" onClick={(e) => setImageModal(false)}/>
      <div className="i-modal-style">
        <div className="i-image-container">
          <IoIosArrowBack
            aria-label='go to previous photo'
            className="i-left-arrow"
            onClick={prevSlide}
          />
          <IoIosArrowForward
            aria-label='go to next photo'
            className="i-right-arrow"
            onClick={nextSlide}
          />
          <FiMinimize
            aria-label='minimize fullscreen'
            className="i-minimize"
            onClick={() => setImageModal(false)}/>
          <img
            className="i-modal-image"
            src={currentImage.url ? currentImage.url : fillIn}
            alt='Main image picture expanded from website gallery'
          />
          <ExpandedIcons
            className="i-expanded-icons"
            gallery={gallery}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
