import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
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
      <h3 onClick={displayDescription.bind(this)} className="pi-description">Description

      {toggleDescription ? <BsChevronUp className="pi-up"/> : <BsChevronDown className="pi-down"/>}</h3>
      {toggleDescription ? <Description {...product} /> : null}
    </div>
  )
}

export default ProductInfo;