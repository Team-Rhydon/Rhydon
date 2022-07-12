import React, {useEffect, useState} from 'react';
import QuantitySelector from './QuantitySelector.jsx';

let SizeSelector = ({selectedStyle}) => {

  const [sku, setSku] = useState();

  let changeSku = (selectedSku) => {
    setSku(selectedSku);
  }

  return (<div>
    {Object.keys(selectedStyle.skus).map((key, i) => {
      let buttonSize = selectedStyle.skus[key].size
      let skuNumber = selectedStyle.skus[key]
      if (key == 'null' || !key) return <button key={i} disabled>{buttonSize || 'Out Of Stock'}</button>
      return (<button key={key} onClick={changeSku.bind(this, skuNumber)}>{buttonSize}</button>)
    })}
    <div>{sku ? <QuantitySelector {...sku}/> : null}</div>

  </div>)
}

export default SizeSelector;