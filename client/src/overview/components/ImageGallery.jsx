import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MiniSlides from './MiniSlides.jsx';

let ImageGallery = ({selectedStyle}) => {
  if (!selectedStyle) return null

  let gallery = selectedStyle.photos

  const [currentImage, setCurrentImage] = useState({
    count: 0,
    url: gallery[0].url
  });

  const commonProps = {
    gallery: gallery,
    currentImage,
    setCurrentImage
  }

  return(<div className="o-image-gallery">
    <MiniSlides {...commonProps}/>
    <Carousel className="image" {...commonProps}/>
  </div>)
}

export default ImageGallery