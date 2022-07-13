import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import MiniSlides from './MiniSlides.jsx';
import ImageModal from './ImageModal.jsx';

let Carousel = ({gallery, currentImage, setCurrentImage}) => {
  if (!gallery.length) return null;

  const[showImageModal, setImageModal] = useState(false);
  let length = gallery.length - 1

  const nextSlide = () => {
    setCurrentImage(prevState => currentImage.count === length ? {
      count: 0,
      url: gallery[0].url
    } : {
      count: currentImage.count + 1,
      url: gallery[currentImage.count].url
    })
  }

  const prevSlide = () => {
    setCurrentImage(prevState => currentImage.count === 0 ? {
      count: length,
      url: gallery[length].url
    } : {
      count: currentImage.count - 1,
      url: gallery[currentImage.count].url
    })
  }

  useEffect(() => {
    setCurrentImage(prevState => ({
      count: 0,
      url: gallery[0].url
    }));
  }, [gallery])

  return (
    <section className="slider">
      <BsArrowLeftCircle className="left-arrow" onClick={prevSlide}/>
      <BsArrowRightCircle className="right-arrow" onClick={nextSlide} />
      {gallery.map(({url}, i) => {
        return (
          <div className={i === currentImage.count ? 'slide active' : 'slide'} key={i}>
            {i === currentImage.count && (<img onClick={() => setImageModal(true)} src={url} key={i} width="800" height="500"/>)}
          </div>
        )
      })}
      <ImageModal show={showImageModal} setImageModal={setImageModal} gallery={gallery}/>
    </section>
  )
}

export default Carousel;