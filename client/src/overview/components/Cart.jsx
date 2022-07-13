import React, {useEffect, useState} from 'react';

let Cart = ({showCart, cart, setCart, updateCart}) => {
  if (!showCart || !cart) return null

  const [checkout, setCheckout] = useState(cart);

  let rmItem = (key) => {
    console.log(cart);
    let filtered = cart.filter((product, i) => i !== key);
    console.log(filtered)
    updateCart(filtered)
    console.log(cart);
  }

  useEffect(() => {
    setCheckout(prevState => cart);
  }, [cart])

  return (
    <div>
      <div>
        <h4> Cart </h4>
      </div>
      <div>
        {checkout.map((product, i) => {
          return (<div key={i} >
            <img src={product.photo} witdh="25" height="25"/>
            <span>Product : {product.name} </span>
            <span>Price : ${product.price} </span>
            <span>Quantity : {product.quantity} </span>
            <span>Size : {product.size} </span>
            <span><button onClick={() => rmItem(i)}>Remove</button></span>
          </div>)
        })}
      </div>
      <div>
        <button onClick={() => setCart(false)}>Close Cart</button>
      </div>
    </div>
  )
}

export default Cart;