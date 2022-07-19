import React, {useEffect, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {FiMaximize} from 'react-icons/fi'
import {TbMinusVertical} from 'react-icons/tb'
import logo from '../../assets/logos/rhydon-logos 2.jpeg';
import line from '../../assets/icons/thick-vertical-line.png';
import ImageModal from './ImageModal.jsx';
import MiniSlides from './MiniSlides.jsx';
import StarRating from '../../Related/StarRating.jsx';

let Carousel = ({gallery, currentImage, setCurrentImage, product, rating, count}) => {
  if (!gallery.length) return null;



  let {name, category} = product;
  const[showImageModal, setImageModal] = useState(false);

  let lastCount = gallery.length - 1

  let nextSlide = (e) => {
    setCurrentImage(currentImage.count === lastCount ? {
      count: 0,
      url: gallery[0].url
    } : {
      count: currentImage.count + 1,
      url: gallery[currentImage.count + 1].url
    })
  }

  let prevSlide = (e) => {
    setCurrentImage(currentImage.count === 0 ? {
      count: lastCount,
      url: gallery[lastCount].url
    } : {
      count: currentImage.count - 1,
      url: gallery[currentImage.count - 1].url
    })
  }

  let scrollToElement = (className) => {
    const anchor = document.querySelector(`.${className}`);
    anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  useEffect(() => {
    setCurrentImage(prevState => ({
      count: 0,
      url: gallery[0].url
    }));
  }, [gallery])

  const passProps = {gallery, currentImage, setCurrentImage, showImageModal, setImageModal, prevSlide, nextSlide};

  return (
    <section className="slider">
    <MiniSlides {...passProps}/>
      {gallery.map(({url}, i) => (
        <div className={i === currentImage.count ? 'slide active' : 'slide'} key={i}>
          {i === currentImage.count && (
            <div className="m-carousel">
                <img className='m-carousel-image'onClick={() => setImageModal(true)} src={url} key={i} />
                <img className="m-logo" src={logo} />
                <IoIosArrowBack className="s-leftarrow" onClick={prevSlide}/>
                <IoIosArrowForward className="s-rightarrow" onClick={nextSlide}/>
                <FiMaximize className="s-expand" onClick={() => setImageModal(true)}/>
                <div className="o-title-review-container">

                  <div className="o-name-category">
                    <div className="o-name-container">
                      <h2 className="pi-name">{name}</h2>
                    </div>
                      <img className="title-line" src={line}/>
                    {/* <TbMinusVertical className="title-line" /> */}
                    <h5 className="pi-category">{category}</h5>
                  </div>
                  <div className="pi-reviewstars">
                    <div className="pi-stars">{rating ? <StarRating rating={rating} count={count}/> : null}</div>
                    <div className="pi-reviews" onClick={() => scrollToElement('RatingWidget')}>Read All {count} Reviews</div>
                  </div>
                </div>
            </div>
          )}
        </div>
      ))}
      <ImageModal {...passProps}/>
    </section>
  )
}

export default Carousel;