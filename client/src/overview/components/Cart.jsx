/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {TbShoppingCartX} from 'react-icons/tb';

const Cart = ({showCart, cartData, setCart, updateCart}) => {
  if (!showCart || !cartData) return null;

  const [checkout, setCheckout] = useState(cartData);
  const [totalPrice, setPrice] = useState()


  const rmItem = (key) => {
    const filtered = cartData.filter((product, i) => i !== key);
    updateCart(filtered);
  };

  let countTotal = () => {
    let total = parseInt(cartData[0].price);
    for (let i = 1; i < cartData.length; i++) {
      total += parseInt(cartData[i].price);
    }
    setPrice(total);
  }

  useEffect(() => {
    setCheckout(cartData)
    cartData.length > 0 ? countTotal() : setCart(false)
  }, [cartData, checkout]);

  return (
    <div>
      <div className='c-overlay'>
        <div className='c-modal-style'>
          <div className='c-title-container'>
            <div className='cart-title'>Succesfully Added To Cart</div>
            <div className='cart-line'></div>
          </div>
          <div className='cart-container'>
            <div className='product-container'>
              {checkout
                ? checkout.map((product, i) => (
                <div className='cart-product'key={i}>
                  <img className="cart-image" src={product.photo} witdh="25" height="25"/>
                  <div className='cart-props'>
                    <p className='cart-name'>{product.name}</p>
                    <p className='cart-style'>{product.style} </p>
                    <p className='cart-price'>${product.price}</p>
                    <p className='cart-size'>Size : {product.size} </p>
                    <p className='cart-quantity'>Quantity : {product.quantity} </p>
                    <TbShoppingCartX className='c-del-item' onClick={() => rmItem(i)}/>
                  </div>
                </div>
                )) :
                <h3> EMPTY </h3>}
            </div>
            <div className='cart-side'>
              <div className='side-props'>
                <div className='quant-container'>
                  <p>Quantity</p>
                  <p>
                    {checkout.length > 1 ?
                    `${checkout.length} items` :
                    '1 item'
                    }
                  </p>
                </div>
                <div className='price-container'>
                  <p className='c-total-description'>Subtotal</p>
                  <p className='c-total-price'>${totalPrice}.00</p>
                </div>
              </div>
              <div className='cart-exits'>
                <button
                  className='view-bag'
                  onClick={() => setCart(false)}>View Bag & Checkout
                </button>
                <button
                  className='keep-shopping'
                  onClick={() => setCart(false)}>Continue Shopping</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
