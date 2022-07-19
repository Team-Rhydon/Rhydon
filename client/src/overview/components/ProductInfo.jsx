/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import Description from './Description.jsx';

const ProductInfo = ({product}) => {
  const [toggleDescription, setDescription] = useState(false);

  const displayDescription = () => {
    setDescription((prevState) => !prevState);
  };

  return (
    <div className="o-details">
      <div className={toggleDescription ? 'o-description-icon-container-open' : 'o-description-icon-container'}>
        <h5 onClick={displayDescription} className="pi-description">Description</h5>
        {toggleDescription ? <AiOutlineMinus onClick={displayDescription} className="pi-minus"/> : <AiOutlinePlus onClick={displayDescription}className="pi-plus"/>}
      </div>
      {toggleDescription ? <Description {...product} /> : null}
    </div>
  );
};

export default ProductInfo;
