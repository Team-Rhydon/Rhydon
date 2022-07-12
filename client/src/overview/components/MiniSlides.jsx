import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'


let MiniSlides = ({gallery, setCurrentImage, currentImage}) => {

  const [slide, setSlide] = useState(gallery);

  // useEffect(() => {
  //   setSlide(gallery);
  // }, [currentImage])

  return (
    <section className="miniSlider">
    {slide.map((obj, i) => {
      if (i === currentImage.count) {
        console.log(obj.url === currentImage.url, i, currentImage.count);
        return <img src={obj.url} key={obj.url} width="100" height="100"/>
      }
      if (i < 7) {
        return <img src={obj.url} key={obj.url} width="70" height="70"/>
      }
      if (i > slide.length - 7) {
        return <img src={obj.url} key={obj.url} width="70" height="70"/>
      }
      // if ((i > currentImage.count - 3 && i < currentImage.count +3) || i < 7) {
      //   return <img src={url} key={i} width="70" height="70"/>
      // } else
      // if (i === 7) {
      //   return
      // }

      // else if (i > gallery.length - 7) {
      //   return <img src={url} key={i} width="70" height="70"/>
      // }
      })}
    </section>
  )
}
export default MiniSlides;
  // if (url === currentImage.url && i - 1 === currentImage.count - 1) {
  //   return <img src={url} key={i} width="100" height="100"/>
  // } else {
  //
  // }(i > currentImage.count - 2 && i < currentImage.count + 2) ||