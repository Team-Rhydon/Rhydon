/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import fillIn from '../../assets/icons/nofound.png';

const MiniSlides = ({gallery, setCurrentImage, currentImage, prevSlide, nextSlide}) => {
  const [slide, setSlide] = useState(gallery);

  const changeImage = (imageCount) => {
    setCurrentImage({
      count: imageCount,
      url: gallery[imageCount].url,
    });
  };

  useEffect(() => {
    setSlide(gallery);
  }, [gallery]);

  return (
    <section className="miniSlider">
      <IoIosArrowUp onClick={prevSlide} className="ms-arrowup"/>
      {slide.map((obj, i) => {
        if (i === currentImage.count) {
          return (
            <img
              className="ms-image ms-image-selected"
              key={obj.url}
              onClick={() => changeImage(i)}
              src={obj.url ? obj.url : fillIn}
              alt='mini slide picture from style gallery and selected picture'
            />
          );
        }
        if (i > currentImage.count - 4 && i < currentImage.count + 4) {
          return (
            <img
              className="ms-image"
              key={obj.url}
              onClick={() => changeImage(i)}
              src={obj.url ? obj.url : fillIn}
              alt='mini slide picture from style gallery'
            />
          );
        }
        if (i < 7 && currentImage.count < 4) {
          return (
            <img
              className="ms-image"
              key={obj.url}
              onClick={() => changeImage(i)}
              src={obj.url ? obj.url : fillIn}
              alt='mini slide picture from style gallery'
            />
          );
        }
        if (i >= slide.length - 7 && currentImage.count > slide.length - 5) {
          return (
            <img
              className="ms-image"
              key={obj.url}
              onClick={() => changeImage(i)}
              src={obj.url ? obj.url : fillIn}
              alt='mini slide picture from style gallery'
            />
          );
        }
      })}
      <IoIosArrowDown onClick={nextSlide} className="ms-arrowdown"/>
    </section>
  );
};

export default MiniSlides;
