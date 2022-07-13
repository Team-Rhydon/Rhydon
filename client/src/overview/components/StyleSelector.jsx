import React, {useState, useEffect} from 'react';
import SalePrice from './SalePrice.jsx';
import Thumbnail from './Thumbnail.jsx';

let StyleSelector = ({selectedStyle, setSelectedStyle, productStyles}) => {
  if (!selectedStyle || !productStyles) return(<></>)

  let salePrice = selectedStyle.sale_price

  return (<>
    <h4>Style &#8594; {selectedStyle.name}</h4>
    <div>{salePrice ? <SalePrice style={selectedStyle} /> : `$${selectedStyle.original_price}`}</div>

    <Thumbnail
      style={selectedStyle}
      productStyles={productStyles}
      setSelectedStyle={setSelectedStyle}
    />
  </>)
}

export default StyleSelector