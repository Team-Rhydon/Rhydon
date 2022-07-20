/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {FiMinimize} from 'react-icons/fi';
import {createPortal} from 'react-dom';
import styled from 'styled-components';
import ExpandedIcons from './ExpandedIcons.jsx';

const ImageModal = ({gallery, currentImage, setCurrentImage, showImageModal, setImageModal, prevSlide, nextSlide}) => {
  if (!showImageModal) return null;

  return (
    <>
      <div className="i-overlay" onClick={() => setImageModal(false)}/>
      <div className="i-modal-style">
        <div className="i-image-container">
          <IoIosArrowBack
            className="i-left-arrow"
            onClick={prevSlide}
          />
          <IoIosArrowForward
            className="i-right-arrow"
            onClick={nextSlide}
          />
          <FiMinimize
            className="i-minimize"
            onClick={() => setImageModal(false)}/>
          <img
            className="i-modal-image"
            src={currentImage.url}
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
