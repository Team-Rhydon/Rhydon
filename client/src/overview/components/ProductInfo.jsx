import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import StarRating from '../../Related/StarRating.jsx';
import Description from './Description.jsx';

let ProductInfo = (props) => {
  const [rating, setRating] = useState();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState();
  const [toggleDescription, setDescription] = useState(false);

  let {name, category, description, slogan, features} = product;

  useEffect(() => {
    props.get('/products')
    .then(({data}) => {
      setProduct(prevState => {
        return {
          name: data.name,
          category: data.category,
          description: data.description,
          slogan: data.slogan,
          features: data.features,
        }
      })
    })
    .catch(err => console.error('setProduct error', err));

    props.get('/stars')
    .then(({data}) => {
      let people = 0;
      let stars = 0;

      for (let star in data.ratings) {
        people += parseInt(data.ratings[star]);
        stars += (data.ratings[star] * star);
      }

      setRating(prevState => stars/people)
    })
    .catch(err => console.error('setRating error', err));

    props.get('/reviews')
    .then(({data}) => {
      setCount(prevState => data.count)
    })
    .catch(err => console.error('setCount error', err));

  }, [])

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