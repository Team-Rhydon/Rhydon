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
    if (amount > stock) {
      setPurchase(prevState => {
        console.log(prevState)
        return {
          ...prevState,
          size: size,
          quantity: 1,
          complete: true
        }
      })
    } else {
      setPurchase(prevState => {
        console.log(prevState)
        return {
          ...prevState,
          size: size,
          quantity: amount,
          complete: true
        }
      })
    }
  }, [size, quantity])

  return (<>
    <select onChange={e => changeAmount.call(this, e)}>
      {[...Array(stock)].map((nothing, i) => {
        return (
          <option key={i} value={i + 1}>{i + 1}</option>
        )
      })}</select>
     </> )
}

export default QuantitySelector;