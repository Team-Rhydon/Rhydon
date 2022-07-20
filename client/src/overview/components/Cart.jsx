/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '100px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0 , .7)',
  zIndex: 1000,
};

const Cart = ({showCart, cartData, setCart, updateCart}) => {
  if (!showCart || !cartData) return null;

  const [checkout, setCheckout] = useState(cartData);

  const rmItem = (key) => {
    const filtered = cartData.filter((product, i) => i !== key);
    updateCart(filtered);
  };

  useEffect(() => {

      setCheckout((prevState) => cartData)
  }, [cartData]);



  return (
    <div>
      <div className='c-overlay'>
        <div className='c-modal-style'>
          <div>
            <h3> Cart </h3>
          </div>
          {checkout.map((product, i) => (
            <div key={i}>
              <img src={product.photo} witdh="25" height="25"/>
              <span>Product : {product.name} </span>
              <span>Price : ${product.price} </span>
              <span>Quantity : {product.quantity} </span>
              <span>Size : {product.size} </span>
              <span><button onClick={() => rmItem(i)}>Remove</button></span>
            </div>
          ))}
          <div>
            <button onClick={() => setCart(false)}>Close Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
