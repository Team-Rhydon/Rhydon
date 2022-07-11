import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'

let Carousel = ({gallery}) => {
  if (!gallery.length) return null;

  const [image, setImage] = useState(0);
  const length = gallery.length;
  console.log(image);

  const nextSlide = () => {
    setImage(prevState => image === length - 1 ? 0 : image + 1)
  }

  const prevSlide = () => {
    setImage(prevState => image === 0 ? length - 1 : image - 1)
  }

  useEffect(() => {
    setImage(prevState => 0);
  }, [gallery])

  return (
    <section className="slider">
      <BsArrowLeftCircle className="left-arrow" onClick={prevSlide}/>
      <BsArrowRightCircle className="right-arrow" onClick={nextSlide} />
      {gallery.map(({url}, i) => {
        return (
          <div className={i === image ? 'slide active' : 'slide'} key={i}>
            {i === image && (<img src={url} key={i} width="270" height="270"/>)}
          </div>
        )
      })}
    </section>
  )
}

export default Carousel;