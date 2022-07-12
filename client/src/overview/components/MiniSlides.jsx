import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'


let MiniSlides = ({gallery, setCurrentImage, currentImage}) => {

  const [slides, setSlides] = useState(gallery.slice(currentImage.count, currentImage.count + 7));

  useEffect(() => {
    if (currentImage.count > 7) {
      setSlides(gallery.slice(currentImage.count -7, currentImage));
    } else {
      setSlides(gallery.slice(0, 7))
    }
  }, [currentImage])

  return (
    <section className="miniSlider">
      {slides.map(({url}, i) => {
        if (url === currentImage.url && i - 1 === currentImage.count - 1) {
          return <img src={url} key={i} width="100" height="100"/>
        } else {
          return <img src={url} key={i} width="70" height="70"/>
        }
      })}
    </section>
  )
}
export default MiniSlides;
{/* <img src={url} key={i} width="100" height="100"/> */}
// return <img src={url} key={i} width="70" height="70"/>
//   const [mini, setMini] = useState(gallery.slice(0, 7));

//   useEffect(() => {
//     if (currentImage < 7) {
//       setMini(gallery.slice(currentImage, currentImage + 7))
//     } else if (currentImage > gallery.length - 7) {
//       setMini(gallery.slice(-7))
//     }
//   }, [currentImage]);

//   useEffect(() => {
//     if (gallery.length < 7) {
//       setMini(prevState => gallery.slice())
//     }
//   }, [currentImage])

//   useEffect(() => {
//     setMini(prevState => gallery.slice(0, 7))
//   }, [gallery])

//   return (
//     <section className="miniSlider">
//       {mini.map(({url}, i) => {
//         if (i === currentImage) {
//           console.log(i, currentImage)
//           return <img src={url} key={i} width="100" height="100"/>
//         } else {
//           return <img src={url} key={i} width="70" height="70"/>
//         }
//       })}
//     </section>
//   )
