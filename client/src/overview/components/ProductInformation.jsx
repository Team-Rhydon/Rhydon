import React, {useEffect, useState} from "react";
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
            default_price: data.default_price
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

  let getStars = () => {
    get('/overview/stars')
    .then(({data}) => {
      let totalPeople = 0;
      let totalStars = 0;
      for (let star in data.ratings) {
        totalPeople += parseInt(data.ratings[star]);
        totalStars += (data.ratings[star] * star);
      }
      let arr = [];
      const avg = totalStars/totalPeople;
      for (let i = 0; i < 5; i++) {
        if (i < avg) {
          arr.push(true);
        } else {
          arr.push(false);
        }
      }
      setRating(prevState =>  arr)
    })
    .catch(err => console.error('star error', err))
  }

  useEffect(() => {
    getStills();
    getStars()
  }, []);

  let show;

  if (rating && stills) {
    show = (<>
      <div className="star-rating">
      {rating.map((star, index) => {
        if (star) {
          return <span key={index}  >&#9733;</span>
        } else {
          return <span key={index} >&#9734;</span>
        }

      })}
    </div>
      <h3>{stills.category}</h3>
      <h2>{stills.name}</h2>
      <div>${price || stills.default_price}</div>
      <div>{stills.slogan} {stills.description}</div>
      <>
        {stills.feature ? stills.features.map(({feature, value}, i ) => {
          return <div key={i}>{feature} : {value} </div>
        }) : <></>}
      </>
    </>
    )
  }
  return (
    <>{show}</>
  )
}

export default ProductInformation;
