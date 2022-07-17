import React, {useState, useEffect} from 'react';
import SalePrice from './SalePrice.jsx';
import Thumbnail from './Thumbnail.jsx';

let StyleSelector = ({selectedStyle, setSelectedStyle, productStyles}) => {
  if (!selectedStyle || !productStyles) return null
  let {sale_price, original_price, name} = selectedStyle;

  let sale = sale_price

  return (<div className="styleselector">
      <div className="ss-name">Select Style &#8594; <div className="ss-s-name">{name}</div></div>
      <div className="ss-price">{sale ? <SalePrice style={selectedStyle} /> : `$${original_price}`}</div>
    <Thumbnail productStyles={productStyles} setSelectedStyle={setSelectedStyle} style={selectedStyle}/>
  </div>)
}

export default StyleSelector