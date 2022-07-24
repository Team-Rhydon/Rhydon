/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
//import fillIn from '../../assets/icons/nofound.png';
import CloudImg from '../../../src/CloudImg.jsx';

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
      <IoIosArrowUp
        onClick={prevSlide}
        className="ms-arrowup"
        aria-label='shift mini slide picture upwards'
      />
      {slide.map((obj, i) => {
        if (i === currentImage.count) {
          return (
            <div key={obj.url} onClick={() => changeImage(i)} >
              {obj.url?
                <CloudImg
                  className={"ms-image ms-image-selected"}
                  url={obj.url} />:
                  null
              }
            </div>
          );
        }
        if (i > currentImage.count - 4 && i < currentImage.count + 4) {
          return (
            <div key={obj.url} onClick={() => changeImage(i)}
            >
              {obj.url?
                <CloudImg
                  className={"ms-image"}
                  url={obj.url} />:
                null
              }
            </div>
          );
        }
        if (i < 7 && currentImage.count < 4) {
          return (
            <div
              key={obj.url}
              onClick={() => changeImage(i)}
            >
              {obj.url?
                <CloudImg
                  className={"ms-image"}
                  url={obj.url} />:
                null
              }
            </div>
          );
        }
        if (i >= slide.length - 7 && currentImage.count > slide.length - 5) {
          return (
            <div
              key={obj.url}
              onClick={() => changeImage(i)}
            >
              {obj.url?
                <CloudImg
                  className={"ms-image"}
                  url={obj.url} />:
                null
              }
            </div>
          );
        }
      })}
      <IoIosArrowDown
        onClick={nextSlide}
        className="ms-arrowdown"
        aria-label='shift mini slides down'
      />
    </section>
  );
};

export default MiniSlides;
