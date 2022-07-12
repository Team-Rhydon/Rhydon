import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import MiniSlides from './MiniSlides.jsx';

let ImageGallery = ({productStyles, selectedStyle, setSelectedStyle}) => {
  if (!selectedStyle || !productStyles) return null

  let images = selectedStyle.photos

  const [currentImage, setCurrentImage] = useState({
    count: 0,
    url: images[0].url
  });

  return(<>
    <Carousel gallery={images} currentImage={currentImage} setCurrentImage={setCurrentImage} className="image"/>
    <MiniSlides gallery={images} setCurrentImage={setCurrentImage} currentImage={currentImage}/>
  </>)
}

export default ImageGallery
