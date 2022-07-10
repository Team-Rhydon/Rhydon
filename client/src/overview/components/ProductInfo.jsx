import React, {useEffect, useState} from 'react';
import StarRating from '../../Related/StarRating.jsx'

let ProductInfo = (props) => {
  const [rating, setRating] = useState();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState();
  let {name, category, description, slogan, features} = product;

  useEffect(() => {
    props.get('/products')
    .then(({data}) => {
      setProduct(prevState => {
        return {
          ...prevState,
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

  if (!count) return <></>

  return (<>
      <h4>{name}</h4>
      <>{rating ? <StarRating rating={rating}/> : null}</>
      <div>Read All {count} Reviews</div>
      <h5>{category}</h5>
      <div>{slogan}</div>
      <div>{description}</div>
      {features ? features.map(({feature, value}, i) => {
        return <div key={i}>{feature} : {value}</div>
      }) : null}
  </>)
}

export default ProductInfo;