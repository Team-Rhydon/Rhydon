import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import StarRating from '../../Related/StarRating.jsx';
import Description from './Description.jsx';

let ProductInfo = ({details, reviews}) => {

  const [rating, setRating] = useState();
  const [product, setProduct] = useState(details);
  const [count, setCount] = useState(1);
  const [toggleDescription, setDescription] = useState(false);

  let {name, category, description, slogan, features} = product;

  const getRatingsAvg = (data) => {
    let people = 0;
    let stars = 0;

    for (let star in data) {
      people += parseInt(data[star]);
      stars += (data[star] * star);
    }
    setCount(people)
    setRating(prevState => stars/people)
  }

  useEffect(() => {
    setProduct(prevState => {
      return {
        name: name,
        category: category,
        description: description,
        slogan: slogan,
        features: features,
      }
    })
    getRatingsAvg(reviews.ratings)
  }, [details, reviews])

  let displayDescription = () => {
    setDescription(prevState => !prevState)
  }

  if (!count) return <></>

  return (<>
  <div className="o-product-info">
      <h2 className="pi-name">{name}</h2>
      <h5>{category}</h5>
      <>{rating ? <StarRating rating={rating} count={count}/> : null}</>
      <div>Read All {count} Reviews</div>
  </div>
      <h3 onClick={displayDescription.bind(this)} className="pi-description">Description {toggleDescription ? <BsChevronUp className="pi-up"/> : <BsChevronDown className="pi-down"/>}</h3>
      {toggleDescription ? <Description {...product} /> : null}
</>  )
}

export default ProductInfo;