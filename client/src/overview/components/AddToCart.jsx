import React, {useEffect, useState} from 'react';
import SizeSelector from './SizeSelector.jsx'

let AddToCart = ({selectedStyle}) => {
  if (!selectedStyle) return null;

  let {name, original_price, sale_price} = selectedStyle;

  const [purchase, setPurchase] = useState({
    complete: false,
    name: name,
    price: original_price,
    salePrice: sale_price
  });

  return (<div>
    <SizeSelector selectedStyle={selectedStyle} setPurchase={setPurchase.bind(this)}/>
    <button disabled={!purchase.complete}>Add To Cart</button>
  </div>)
}

export default AddToCart;