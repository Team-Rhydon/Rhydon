/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';

const QuantitySelector = ({size, quantity, setPurchase, selectedQuantity, setSelectedQuantity}) => {
  const [stock, setStock] = useState(quantity > 15 ? [...Array(15)] : [...Array(quantity)]);

  const changeAmount = (e) => {
    setSelectedQuantity(e.target.value);
    console.log(e.target.value);
    setPurchase((prevState) => ({
      ...prevState,
      size: size,
      quantity: e.target.value,
    }));
  };

  useEffect(() => {
    setStock(quantity > 15 ? [...Array(15).keys()] : [...Array(quantity).keys()]);
    setPurchase((prevState) => {
      return {
        ...prevState,
        size: size,
        quantity: 1,
        complete: true,
      };
    });
  }, [size]);

  if (!stock) return null;

  return (
    <div>
    <select
      className="quantity-selector"
      value={selectedQuantity}
      onChange={(e) => changeAmount(e)}
      >
      {stock.map((val, i) => {
        if (i === 0) return (<option key={i} defaultValue={i + 1}>{i + 1}</option>);
        return (<option key={i} value={i+1}>{i + 1}</option>);
      })}
    </select>
  </div> );
};

export default QuantitySelector;
