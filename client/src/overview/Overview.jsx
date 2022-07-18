import React, {useState, useEffect} from "react";
import ProductInfo from "./components/ProductInfo.jsx";
import Styles from "./components/Styles.jsx";

let Overview = ({reviews, styles, details, ratingsScroll}) => {
  const [rating, setRating] = useState();
  const [count, setCount] = useState();
  const [product, setProduct] = useState(details);
  console.log(product)
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

  if (!product) return null

  return (<div className="overview-widget">
    <Styles styles={styles} product={product} rating={rating} count={count}/>
    <ProductInfo product={product} ratingsScroll={ratingsScroll}/>
  </div>)
}

export default Overview;

{/* <div className="o-title-review-container">
  <div className="o-name-category">
    <h2 className="pi-name">{name}</h2>
    <h5>{category}</h5>
  </div>
  <div className="pi-reviewstars">
    <div className="pi-stars">{rating ? <StarRating rating={rating} count={count}/> : null}</div>
    <div className="pi-reviews" onClick={ratingsScroll}>Read All {count} Reviews</div>
  </div>
</div> */}