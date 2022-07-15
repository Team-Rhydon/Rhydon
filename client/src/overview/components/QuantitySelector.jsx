import React, {useEffect, useState} from 'react';

let QuantitySelector = ({sku, size, quantity, setPurchase}) => {

  const [stock, setStock] = useState(quantity > 15 ? [...Array(15)] : [...Array(quantity)])

  let changeAmount = (e) => {
    console.log(e.target.value);
    setPurchase((prevState) => ({
      ...prevState,
      size: size,
      quantity: e.target.value
    }))
  }

  useEffect(() => {
    setStock()
    setPurchase(prevState => {
      return {
        ...prevState,
        size: size,
        quantity: 1,
        complete: true
      }
    })
    return () => {
      console.log('hi');
      setStock(quantity > 15 ? [...Array(15).keys()] : [...Array(quantity).keys()])
    }
  }, [sku, size, quantity])

  if (!stock) return null
  return (<div>
    <select onChange={e => changeAmount(e)}>
      {stock.map((val, i) => {
        if (i === 0) return (<option key={i} defaultValue={i + 1}>{i + 1}</option>)
        return (<option key={i} value={i + 1}>{i + 1}</option>)
      })}</select>
     </div> )
}

export default QuantitySelector;