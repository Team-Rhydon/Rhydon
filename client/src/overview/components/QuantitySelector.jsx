import React, {useEffect, useState} from 'react';

let QuantitySelector = ({size, quantity, setPurchase}) => {

  const [amount, setAmount] = useState(1);

  let stock = quantity > 15 ? 15 : quantity;

  let changeAmount = (e) => {
    setAmount(prevState => {
      setPurchase((prevState) => {
        return {...prevState,
          size: size,
          quantity: e.target.value}
      })
      return e.target.value})
  }

  useEffect(() => {
    setPurchase(prevState => {
      return {
        ...prevState,
        size: size,
        quantity: 1,
        complete: true
      }
    })
  }, [size, quantity])

  return (<div>
    <select onChange={e => changeAmount.call(this, e)}>
      {[...Array(stock)].map((nothing, i) => {
        return (
          <option key={i} value={i + 1}>{i + 1}</option>
        )
      })}</select>
     </div> )
}

export default QuantitySelector;