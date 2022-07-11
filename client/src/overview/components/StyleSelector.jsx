import React, {useState, useEffect} from 'react';
import Price from './Price.jsx';
import Thumbnail from './Thumbnail.jsx';

let StyleSelector = ({get, selectedStyle, setSelectedStyle, productStyles}) => {
  if (!selectedStyle || !productStyles) return(<></>)

  let salePrice = selectedStyle.sale_price

  return (<>
    <h4>Style &#8594; {selectedStyle.name}</h4>
    <div>{salePrice ? <Price style={selectedStyle} /> : `$${selectedStyle.original_price}`}</div>
    <Thumbnail
      style={selectedStyle}
      productStyles={productStyles}
      setSelectedStyle={setSelectedStyle}
    />
  </>)
}

export default StyleSelector
