/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';

const SalePrice = ({style}) => {
  const {original_price, sale_price} = style;

  return (
    <>
      <span>
        <s>${original_price}</s> &#8594;
      </span>
      <span style={{color: 'red'}}>${sale_price}</span>
    </>
  );
};

export default SalePrice;
