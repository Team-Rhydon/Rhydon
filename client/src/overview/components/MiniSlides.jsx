import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'


let MiniSlides = ({gallery, setCurrentImage, currentImage}) => {

  const [mini, setMini] = useState(gallery.slice(0, 7));

  useEffect(() => {
    if (currentImage < 7) {
      setMini(prevState => gallery.slice(currentImage, currentImage + 7))
    } else if (currentImage > gallery.length - 7) {
      setMini(prevState => gallery.slice(-7))
    }
  }, [gallery, currentImage])

  return (
    <section className="miniSlider">
      {mini.map(({url}, i) => {
        if (i === currentImage) {
          console.log(i, currentImage)
          return <img src={url} key={i} width="100" height="100"/>
        } else {
          return <img src={url} key={i} width="90" height="90"/>
        }
      })}
    </section>
  )
}

export default MiniSlides;