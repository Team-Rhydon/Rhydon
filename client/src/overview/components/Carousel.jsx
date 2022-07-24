/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {FiMaximize} from 'react-icons/fi';
import logo from '../../assets/logos/rhydon-logos 2.jpeg';
import line from '../../assets/icons/thick-vertical-line.png';
// import fillIn from '../../assets/icons/nofound.png';
import ImageModal from './ImageModal.jsx';
import MiniSlides from './MiniSlides.jsx';
import StarRating from '../../Related/StarRating.jsx';
import CloudImg from '../../CloudImg.jsx';

const Carousel = ({gallery, currentImage, setCurrentImage, product, rating, count, ratingsScroll, ratingsRef}) => {
  if (!gallery.length) return null;

  const [showImageModal, setImageModal] = useState(false);

  const {name, category} = product;
  const lastCount = gallery.length - 1;

  const nextSlide = (e) => {
    setCurrentImage(currentImage.count === lastCount ? {
      count: 0,
      url: gallery[0].url,
    } : {
      count: currentImage.count + 1,
      url: gallery[currentImage.count + 1].url,
    });
  };

  const prevSlide = (e) => {
    setCurrentImage(currentImage.count === 0 ? {
      count: lastCount,
      url: gallery[lastCount].url,
    } : {
      count: currentImage.count - 1,
      url: gallery[currentImage.count - 1].url,
    });
  };

  // const scrollToElement = (className) => {
  //   const anchor = document.querySelector(`.$smooth', block: 'start'});
  // };{className}`);
  //   anchor.scrollIntoView({behavior: '

  useEffect(() => {
    setCurrentImage((prevState) => ({
      count: 0,
      url: gallery[0].url,
    }));
  }, [gallery]);

  const passProps = {gallery, currentImage, setCurrentImage, showImageModal, setImageModal, prevSlide, nextSlide};

  return (
    <section className="slider">
      <MiniSlides {...passProps}/>
      {gallery.map(({url}, i) => (
        <div
          className={i === currentImage.count ? 'slide active' : 'slide'}
          key={i}
        >
          {i === currentImage.count && (
            <div className="m-carousel">
              <div onClick={() => setImageModal(true)}>
                {url ?
                  <CloudImg
                    className={'m-carousel-image'}
                    url={url}
                  />:
                  null
                }
              </div>
              <img
                className="m-logo"
                src={logo}
                alt='This is the website brand logo'
              />
              <IoIosArrowBack
                className="s-leftarrow"
                onClick={prevSlide}
              />
              <IoIosArrowForward
                className="s-rightarrow"
                onClick={nextSlide}
              />
              <FiMaximize
                className="s-expand"
                onClick={() => setImageModal(true)}
              />
              <div className="o-title-review-container">
                <div className="o-name-category">
                  <div className="o-name-container">
                    <h2 className="pi-name">{name}</h2>
                  </div>
                  <img
                    className="title-line"
                    src={line}
                    alt='Title and category icon seperator'
                  />
                  <h5 className="pi-category">{category}</h5>
                </div>
                <div className="pi-reviewstars">
                  <div
                    className="pi-stars">
                    {rating ?
                      <StarRating
                        rating={rating}
                        count={count}
                      /> :
                      null
                    }
                  </div>
                  <div
                    className="pi-reviews"
                    onClick={() => ratingsScroll(ratingsRef)}
                  >
                    Read All {count} Reviews
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <ImageModal {...passProps}/>
    </section>
  );
};

export default Carousel;
