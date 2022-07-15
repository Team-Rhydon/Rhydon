import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import ImageModal from './ImageModal.jsx';

let Carousel = ({gallery, currentImage, setCurrentImage}) => {
  if (!gallery.length) return null;

  const[showImageModal, setImageModal] = useState(false);

  let length = gallery.length - 1

  let nextSlide = (e) => {
    debugger;
    setCurrentImage(prevState => currentImage.count === length ? {
      count: 0,
      url: gallery[0].url
    } : {
      count: prevState.count + 1,
      url: gallery[currentImage.count + 1].url
    })
  }

  let prevSlide = (e) => {
    setCurrentImage(currentImage.count === 0 ? {
      count: length,
      url: gallery[length].url
    } : {
      count: currentImage.count - 1,
      url: gallery[currentImage.count - 1].url
    })
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
      <BsArrowLeftCircle className="left-arrow" onClick={prevSlide}/>
      <BsArrowRightCircle className="right-arrow" onClick={nextSlide} />
      {gallery.map(({url}, i) => {
        return (
          <div className={i === currentImage.count ? 'slide active' : 'slide'} key={i}>
            {i === currentImage.count && (<img onClick={() => setImageModal(true)} src={url} key={i} width="800" height="600"/>)}
          </div>
        )
      })}
      <ImageModal {...passProps}/>
    </section>
  )
}

export default Carousel;