import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'

let MiniSlides = ({gallery, setCurrentImage, currentImage}) => {

  const [slide, setSlide] = useState(gallery);

  let changeImage = (imageCount) => {
    setCurrentImage({
      count: imageCount,
      url: gallery[imageCount].url
    })
  }

  useEffect(() => {
    setSlide(gallery);
  }, [gallery])

  return (
    <section className="miniSlider">
    {slide.map((obj, i) => { return <div key={i} onClick={() => changeImage(i)}>
      {i === currentImage.count ? <img src={obj.url} key={obj.url} width="100" height="100"/> : <img src={obj.url} key={obj.url} width="70" height="70"/>}
    </div>})}
    </section>
  )
}
export default MiniSlides;