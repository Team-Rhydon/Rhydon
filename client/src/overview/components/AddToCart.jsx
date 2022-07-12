import React, {useEffect, useState} from 'react';
import SizeSelector from './SizeSelector.jsx'

let AddToCart = ({selectedStyle}) => {
  if (!selectedStyle) return null;
  return (<div>
    <SizeSelector selectedStyle={selectedStyle}/>
  </div>)
}

export default AddToCart;