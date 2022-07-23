/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import SizeSelector from './SizeSelector.jsx';
import fillIn from '../../assets/icons/nofound.png';
import Cart from './Cart.jsx';
import {FaReact} from 'react-icons/fa';
// import {GiOctopus} from 'react-icons/gi'
import octo from '../../assets/icons/octo.png';


const AddToCart = ({selectedStyle, productName, setcartData, cartData, updateCart}) => {
  if (!selectedStyle) return null;

  const {name, original_price, sale_price, photos} = selectedStyle;

  const [purchase, setPurchase] = useState({
    complete: false,
    name: name,
    price: sale_price || original_price,
    photo: photos[0].url,
  });

  const [showCart, setCart] = useState(false);
  const [like, setLike] = useState(false);

  const fillCart = () => {
    setCart(true);
    updateCart((prevState) => {
      return [{
        name: productName,
        style: purchase.name,
        photo: purchase.photo || fillIn,
        price: purchase.price,
        quantity: purchase.quantity,
        size: purchase.size,
      }, ...prevState];
    });
  };

  return (
    <div className="s-addtocart">
      <SizeSelector
        selectedStyle={selectedStyle}
        setPurchase={setPurchase}
      />
      <div className="add-love-buttons">
        <button
          aria-label='Add To Cart button'
          className="s-add-button"
          onClick={() => fillCart()}
          disabled={!purchase.complete}
        >
          Add To Cart
        </button>
        <button
          aria-label='Like or unlike button'
          className={like ? 'lovey-button' : 'lovey-button to-love-button'}
          onClick={() => setLike(!like)}

        >
          {like ?
            <img className="octo-button" src={octo}/> :
            <FaReact className="react-button" />}
        </button>
      </div>
      {showCart ?
        <Cart
          showCart={showCart}
          setCart={setCart}
          cartData={cartData}
          updateCart={updateCart}
        /> :
        null
      }
    </div>
  );
};

export default AddToCart;
