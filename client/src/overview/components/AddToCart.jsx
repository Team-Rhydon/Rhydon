import React, {useEffect, useState} from 'react';
import SizeSelector from './SizeSelector.jsx'
import Cart from './Cart.jsx'

let AddToCart = ({selectedStyle}) => {
  if (!selectedStyle) return null;

  let {name, original_price, sale_price, photos} = selectedStyle;

  const [purchase, setPurchase] = useState({
    complete: false,
    name: name,
    price: sale_price || original_price,
    photo: photos[0].url
  });
  const [cartData, updateCart] = useState([])
  const [showCart, setCart] = useState(false);

  let fillCart = () => {
    setCart(true)
    updateCart(prevState => {
      return [{
        name: purchase.name,
        photo: purchase.photo,
        price: purchase.price,
        quantity: purchase.quantity,
        size: purchase.size
      }, ...prevState]
    })
  }

  return (<div>
    <SizeSelector selectedStyle={selectedStyle} setPurchase={setPurchase}/>
    <button onClick={fillCart} disabled={!purchase.complete}>Add To Cart</button>
    {showCart ? <Cart showCart={showCart} setCart={setCart} cartData={cartData} updateCart={updateCart}/> : null}
  </div>)
}

export default AddToCart;