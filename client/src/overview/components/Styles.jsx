/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Share from './Share.jsx';

const Styles = ({styles, product, rating, count, ratingsScroll, ratingsRef, productName, cartData, updateCart}) => {
  const {results} = styles;
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(() => {
    setSelectedStyle(results[0]);
    setProductStyles(results);
  }, []);

  const commonProps = {
    productStyles,
    selectedStyle,
    setSelectedStyle,
    product,
    rating,
    count,
    ratingsScroll,
    ratingsRef,
    productName,
    cartData,
    updateCart,
  };

  return (
    <div className="overview-styles">
      <ImageGallery {...commonProps}/>
      <section className="o-sidebar">
        <StyleSelector {...commonProps}/>
        <AddToCart {...commonProps}
          // productStyles={productStyles}
          // selectedStyle={selectedStyle}
          // setSelectedStyle={setSelectedStyle}
        />
        <Share />
      </section>
    </div>
  );
};

export default Styles;
