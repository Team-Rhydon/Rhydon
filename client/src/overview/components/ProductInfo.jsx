import React, { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus,  } from 'react-icons/ai';
import StarRating from '../../Related/StarRating.jsx';
import Description from './Description.jsx';

let ProductInfo = ({product}) => {

  const [count, setCount] = useState(1);
  const [toggleDescription, setDescription] = useState(false);

  let displayDescription = () => {
    setDescription(prevState => !prevState)
  }

  if (!count) return <></>

  return (
    <div className="o-details">
      <div className="o-description-icon-container">
        <h3 onClick={displayDescription.bind(this)} className="pi-description">Description</h3>
        {toggleDescription ? <AiOutlineMinus className="pi-minus"/> : <AiOutlinePlus className="pi-plus"/>}
      </div>
      {toggleDescription ? <Description {...product} /> : null}
    </div>
  )
}

export default ProductInfo;