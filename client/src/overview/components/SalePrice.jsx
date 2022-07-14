import React from 'react';

let SalePrice = ({style}) => {
  let {original_price, sale_price} = style;
  return (<>
    <span><s>${original_price}</s> &#8594;</span>
      <span style={{color: "red"}}>${sale_price}</span>
  </>)
}

export default SalePrice;