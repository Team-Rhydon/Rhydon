import React, {useState, useEffect} from 'react';
import SalePrice from './SalePrice.jsx';
import Thumbnail from './Thumbnail.jsx';

let StyleSelector = ({selectedStyle, setSelectedStyle, productStyles}) => {
  if (!selectedStyle || !productStyles) return null
  let {sale_price, original_price, name} = selectedStyle;

  let sale = sale_price

  return (<div>
    <span>
      <h4>Style &#8594; {name}</h4>
      <div>{sale ? <SalePrice style={selectedStyle} /> : `$${original_price}`}</div>
    </span>
    <Thumbnail productStyles={productStyles} setSelectedStyle={setSelectedStyle}/>
  </div>)
}

export default StyleSelector