import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import StarRating from '../../Related/StarRating.jsx'
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
    console.log(stars/people)
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
      <h2>{name}</h2>
      <h5>{category}</h5>
      <>{rating ? <StarRating rating={rating} count={count}/> : null}</>
      <div>Read All {count} Reviews</div>
      <h3 onClick={displayDescription.bind(this)}>Description {toggleDescription ? <BsChevronUp/> : <BsChevronDown/>}</h3>
      {toggleDescription ? <Description {...product} /> : null}
  </>)
}

export default ProductInfo;