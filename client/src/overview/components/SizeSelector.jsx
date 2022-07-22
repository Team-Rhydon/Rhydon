/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import fillIn from '../../assets/icons/nofound.png';
import QuantitySelector from './QuantitySelector.jsx';

const SizeSelector = ({selectedStyle, setPurchase}) => {
  const {name, original_price, sale_price, photos} = selectedStyle;

  const [sku, setSku] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const onSkuClick = (e, skuNumber) => {
    setSelectedQuantity(1);
    setSku(skuNumber);
  };

  useEffect(() => {
    setSku();
    setPurchase({
      complete: false,
      name: name,
      price: sale_price || original_price,
      photo: photos[0].url || fillIn,
      quantity: 1,
    });
  }, [selectedStyle]);

  return (
    <div className="ss-allsizes">
      <div className="ss-size-title">Select Size</div>
      {Object.keys(selectedStyle.skus).map((key, i) => {
        const skuNumber = selectedStyle.skus[key];
        const buttonSize = skuNumber.size;
        const quantity = skuNumber.quantity;

        if (key == 'null' || !key || !quantity) {
          return (
            <button
              aria-label={`out of stock ${buttonSize}`}
              className="sizebuttons"
              key={i}
              disabled
            >
              {buttonSize || 'Out Of Stock'}
            </button>
          );
        }
        return (
          <button
            aria-label={`choose size ${buttonSize}`}
            className={sku && sku.size === buttonSize ?
              'sizebuttons sizebuttons-picked' :
              'sizebuttons'}
            key={key}
            onClick={(e) => {
              onSkuClick(e, skuNumber);
            }}
          >
            {buttonSize}
          </button>
        );
      })}
      {sku ?
        <QuantitySelector
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
          setPurchase={setPurchase}
          {...sku}
        /> :
        null
      }
    </div>
  );
};

export default SizeSelector;
