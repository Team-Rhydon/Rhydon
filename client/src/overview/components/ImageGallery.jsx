import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MiniSlides from './MiniSlides.jsx';

let ImageGallery = ({selectedStyle, product, rating, count}) => {
  if (!selectedStyle) return null

  let gallery = selectedStyle.photos

  const [currentImage, setCurrentImage] = useState({
    count: 0,
    url: gallery[0].url
  });

  const commonProps = {
    gallery: gallery,
    currentImage,
    setCurrentImage,
    product,
    rating,
    count
  }

  return(<div className="o-image-gallery">
    <Carousel className="image" {...commonProps}/>
  </div>)
}

export default ImageGallery