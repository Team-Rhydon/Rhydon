import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {FaCircleNotch, FaCircle} from 'react-icons/fa'

let ExpandedIcons = ({gallery, setCurrentImage, currentImage}) => {

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
      {i === currentImage.count ? <FaCircleNotch /> : <FaCircle /> }
    </div>})}
    </section>
  )
}
export default ExpandedIcons;