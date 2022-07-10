import React, {useEffect, useState} from "react";
import StarRating from '../../Related/StarRating.jsx';
import axios from 'axios';

let ProductInformation = ({get, price}) => {
  const [rating, setRating] = useState();
  const [stills, setStills] = useState({});

  let getStills = () => {
    return get('/overview/products')
      .then(({data}) => {
        setStills(prevState => {
          return {
            ...prevState,
            name: data.name,
            category: data.category,
            description: data.description,
            slogan: data.slogan,
            features: data.features,
            default_price: `$${data.default_price}`
          }
        })

      })
      .catch(err => console.error('stills error', err))
  }

  let getPrice = () => {
    return get('/overview/products')
      .then(({data}) => {
        setPrice(prevState => data.default_price)
      })
  }

  let getStarsNReviews = () => {
    return get('/overview/stars')
    .then(({data}) => {
      let totalPeople = 0;
      let totalStars = 0;

      for (let star in data.ratings) {
        totalPeople += parseInt(data.ratings[star]);
        totalStars += (data.ratings[star] * star);
      }

      const avg = totalStars/totalPeople;
      setRating(prevState =>  avg)
    })
    .then(get('/overview/reviews')
    .then(({data}) => {
      setStills(prevState => {
        return {
          ...prevState,
          count: data.count
        }
      })
    }))
    .catch(err => console.error('star error', err))
  }

  useEffect(() => {
    getStills();
    getStarsNReviews()
  }, []);

  let show;

  if (price && price !== stills.default_price) {
    price = (
      <>
      <span><s>{stills.default_price}</s> &#8594;</span>
      <span style={{color: "red"}}>  {price}</span>
      </>
    )
  }
  if (rating && stills) {
    show = (<div>
      <div className="star-rating">{rating ? <StarRating  rating={rating} /> : null}</div>
      <div> Read All {stills.count} Reviews</div>
      <h3>{stills.category}</h3>
      <h2>{stills.name}</h2>
      <div>{price ? price : stills.default_price}</div>
      <div>{stills.slogan} {stills.description}</div>
      <>{stills.features ? stills.features.map(({feature, value}, i ) => {
          return <div key={i}>{feature} : {value} </div>
        }) : null}
      </>
    </div>
    )
  }
  return (
    <>{show}</>
  )
}

export default ProductInformation;
