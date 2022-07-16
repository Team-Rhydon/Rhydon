import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {FiMaximize} from 'react-icons/fi'
import ImageModal from './ImageModal.jsx';
import MiniSlides from './MiniSlides.jsx';

let Carousel = ({gallery, currentImage, setCurrentImage}) => {
  if (!gallery.length) return null;

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
            <div>
              <BsArrowLeftCircle className="s-leftarrow" onClick={prevSlide}/>
                <img className='m-pi-image'onClick={() => setImageModal(true)} src={url} key={i}    width="1150" height="750"/>
              <BsArrowRightCircle className="s-rightarrow" onClick={nextSlide}/>
            </div>
          )}
        </div>
      ))}
      <FiMaximize onClick={() => setImageModal(true)}/>
      <ImageModal {...passProps}/>
    </section>
  )
}

export default Carousel;