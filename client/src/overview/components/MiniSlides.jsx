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

  return (<section className="miniSlider">
    {console.log(slide.length)}
    {slide.map((obj, i) => {
      if (i === currentImage.count) {
        return <img  onClick={() => changeImage(i)} src={obj.url} key={obj.url} width="100" height="100"/>
      }
      if (i > currentImage.count - 3 && i < currentImage.count + 3) {
        return <img onClick={() => changeImage(i)} src={obj.url} key={obj.url} width="70" height="70"/>
      }
      if (i < 5 && currentImage.count < 3) {
        return <img onClick={() => changeImage(i)} src={obj.url} key={obj.url} width="70" height="70"/>
      }
      if (i > slide.length - 6 && currentImage.count > slide.length - 4) {
        return <img onClick={() => changeImage(i)} src={obj.url} key={obj.url} width="70" height="70"/>
      }
    })}
    </section>
  )
}
export default MiniSlides;