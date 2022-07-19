/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import SizeSelector from './SizeSelector.jsx';
import Cart from './Cart.jsx';

const AddToCart = ({selectedStyle}) => {
  if (!selectedStyle) return null;

  const {name, original_price, sale_price, photos} = selectedStyle;

  const [purchase, setPurchase] = useState({
    complete: false,
    name: name,
    price: sale_price || original_price,
    photo: photos[0].url,
  });
  const [cartData, updateCart] = useState([]);
  const [showCart, setCart] = useState(false);

  const fillCart = () => {
    setCart(true);
    updateCart((prevState) => {
      return [{
        name: purchase.name,
        photo: purchase.photo,
        price: purchase.price,
        quantity: purchase.quantity,
        size: purchase.size,
      }, ...prevState];
    });
  };

  return (<div className="s-addtocart">
    <SizeSelector selectedStyle={selectedStyle} setPurchase={setPurchase}/>
    <button className="s-add-button" onClick={fillCart} disabled={!purchase.complete}>Add To Cart</button>
    {showCart ? <Cart showCart={showCart} setCart={setCart} cartData={cartData} updateCart={updateCart}/> : null}
  </div>);
};

export default AddToCart;
