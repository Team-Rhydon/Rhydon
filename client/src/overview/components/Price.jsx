import React from 'react';

let Price = ({price, style}) => {

  return (<>
    <span><s>{style.default_price}</s> &#8594;</span>
      <span style={{color: "red"}}>  {price}</span>
  </>)
}

export default Price;