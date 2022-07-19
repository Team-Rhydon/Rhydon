/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductInfo.jsx';
import Styles from './components/Styles.jsx';

const Overview = ({reviews, styles, details, ratingsScroll}) => {
  console.log('reviews', reviews);
  console.log('styles', styles);
  console.log('details', details);

  const [rating, setRating] = useState();
  const [count, setCount] = useState();
  const [product, setProduct] = useState(details);
  const {name, category, description, slogan, features} = product;

  const getRatingsAvg = (data) => {
    let people = 0;
    let stars = 0;

    // eslint-disable-next-line guard-for-in
    for (const star in data) {
      people += parseInt(data[star]);
      stars += (data[star] * star);
    };

    setCount(people);
    setRating((prevState) => stars/people);
  };

  useEffect(() => {
    setProduct((prevState) => {
      return {
        name: name,
        category: category,
        description: description,
        slogan: slogan,
        features: features,
      };
    });
    getRatingsAvg(reviews.ratings);
  }, [details, reviews]);

  if (!product) return null;

  return (<div className="overview-widget">
    <Styles styles={styles} product={product} rating={rating} count={count} ratingsScroll={ratingsScroll}/>
    <ProductInfo product={product} ratingsScroll={ratingsScroll}/>
  </div>);
};

export default Overview;
