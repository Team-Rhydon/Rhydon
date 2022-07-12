import React, {useEffect, useState} from 'react';

let QuantitySelector = ({size, quantity}) => {

  const [amount, setAmount] = useState(1);

  quantity = quantity > 15 ? 15 : quantity;

  let changeAmount = (e) => {
    setAmount(prevState => e.target.value)
  }

  return (<>
    <select onChange={e => changeAmount.call(this, e)}>
      {quantity ? [...Array(quantity)].map((nothing, i) => {
        return (
          <option key={i} value={i + 1}>{i + 1}</option>
        )
      }) : <option value={undefined}>Out of Stock</option> }</select>
     </> )
}

export default QuantitySelector;