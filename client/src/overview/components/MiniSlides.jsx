import React, {useEffect, useState} from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';

let MiniSlides = ({gallery, setCurrentImage, currentImage, prevSlide, nextSlide}) => {

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
      <IoIosArrowUp onClick={prevSlide} className="ms-arrowup"/>
        {slide.map((obj, i) => {
          if (i === currentImage.count) {
            return <img className="ms-image-selected" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
          }
          if (i > currentImage.count - 4 && i < currentImage.count + 4) {
            return <img className="ms-image" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
          }
          if (i < 7 && currentImage.count < 4) {
            return <img className="ms-image" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
          }
          if (i > slide.length - 7 && currentImage.count > slide.length - 5) {
            return <img className="ms-image" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
          }
        })}
      <IoIosArrowDown onClick={nextSlide} className="ms-arrowdown"/>
    </section>
  )
}
export default MiniSlides;

// 7 carousel version
// if (i === currentImage.count) {
//   return <img className="ms-image-selected" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
// }
// if (i > currentImage.count - 4 && i < currentImage.count + 4) {
//   return <img className="ms-image" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
// }
// if (i < 7 && currentImage.count < 4) {
//   return <img className="ms-image" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
// }
// if (i > slide.length - 7 && currentImage.count > slide.length - 5) {
//   return <img className="ms-image" key={obj.url} onClick={() => changeImage(i)} src={obj.url}/>
// }