import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import MiniSlides from './MiniSlides.jsx';

let Carousel = ({gallery}) => {
  if (!gallery.length) return null;

  const  [currentImage, setCurrentImage] = useState(0);
  const length = gallery.length;

  const nextSlide = () => {
    setCurrentImage(prevState => currentImage === length - 1 ? 0 : currentImage + 1)
  }

  const prevSlide = () => {
    setCurrentImage(prevState => currentImage === 0 ? length - 1 : currentImage - 1)
  }

  useEffect(() => {
    setCurrentImage(prevState => 0);
  }, [gallery])

  return (
    <section className="slider">
      <BsArrowLeftCircle className="left-arrow" onClick={prevSlide}/>
      <BsArrowRightCircle className="right-arrow" onClick={nextSlide} />
      {gallery.map(({url}, i) => {
        return (
          <div className={i === currentImage ? 'slide active' : 'slide'} key={i}>
            {i === currentImage && (<img src={url} key={i} width="800" height="500"/>)}
          </div>
        )
      })}
      <MiniSlides gallery={gallery} setCurrentImage={setCurrentImage} currentImage={currentImage}/>
    </section>
  )
}

export default Carousel;