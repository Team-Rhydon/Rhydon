import React, {useEffect, useState} from 'react';

let QuantitySelector = ({sku, size, quantity, setPurchase}) => {

  const [amount, setAmount] = useState(1);
  const [stock, setStock] = useState(quantity > 15 ? [...Array(15)] : [...Array(quantity)])
  console.log('this is stock', stock);

  let changeAmount = (e) => {
    setAmount(prevState => {
      setPurchase((prevState) => ({
          ...prevState,
          size: size,
          quantity: e.target.value
        })
      )
      return e.target.value
    })
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
    setStock(quantity > 15 ? [...Array(15)] : [...Array(quantity)])
  }, [sku])

  return (<div>
    <select value={amount} onChange={e => changeAmount.call(this, e)}>
      {stock.map((nothing, i) => {
        return (<option key={i} value={i + 1}>{i + 1}</option>)
      })}</select>
     </div> )
}

export default QuantitySelector;