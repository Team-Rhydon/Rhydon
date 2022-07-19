/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useState} from 'react';
import Carousel from './Carousel.jsx';

const ImageGallery = ({selectedStyle, product, rating, count, ratingsScroll, ratingsRef}) => {
  if (!selectedStyle) return null;



  const gallery = selectedStyle.photos;

  const [currentImage, setCurrentImage] = useState({
    count: 0,
    url: gallery[0].url,
  });

  const commonProps = {
    gallery: gallery,
    currentImage,
    setCurrentImage,
    product,
    rating,
    count,
    ratingsScroll,
    ratingsRef,
  };

  return (<div className="o-image-gallery">
    <Carousel className="image" {...commonProps}/>
  </div>);
};

export default ImageGallery;
