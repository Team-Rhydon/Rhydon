import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';

let ImageGallery = ({productStyles, selectedStyle, setSelectedStyle}) => {
  if (!selectedStyle || !productStyles) return null
  console.log('productStyles', productStyles)
  console.log('selectedStyle', selectedStyle)
  let images = selectedStyle.photos

return(<>
    <Carousel gallery={images} className="image"/>
  </>)
}

export default ImageGallery
