import React, {useState, useEffect} from "react";
const axios = require("axios");
import StarRating from "../Related/StarRating.jsx";

function RatingBreakdown(props) {
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({})


  useEffect(()=> {
    axios.get('/reviews/meta', {params: {product_id: 40344}})
    .then(response => {
      let ratings = response.data.ratings;
    //  console.log(ratings);
        setRatings(ratings);
        setRecommended(response.data.recommended);
      })
  }, [])


  const totalReviews = parseInt(ratings[5]) + parseInt(ratings[4]) + parseInt(ratings[3]) + parseInt(ratings[2]) + parseInt(ratings[1]);
  const rating = 5*parseInt(ratings[5])/totalReviews + 4 * parseInt(ratings[4])/totalReviews + 3*parseInt(ratings[3])/totalReviews + 2*parseInt(ratings[2])/totalReviews + parseInt(ratings[1])/totalReviews;
  const ratingBars = {
    5:  (parseInt(ratings[5])/totalReviews).toFixed(2),
    4:  (parseInt(ratings[4])/totalReviews).toFixed(2),
    3:  (parseInt(ratings[3])/totalReviews).toFixed(2),
    2:  (parseInt(ratings[2])/totalReviews).toFixed(2),
    1:  (parseInt(ratings[1])/totalReviews).toFixed(2)
  }


  return (
    <div style={{border: "1px solid black", width: "100%"}}>
      <div>
        <p>Rating and Reviews </p>
        <span>
          <h2>{rating.toFixed(2)}
          {rating ? <StarRating rating={rating.toFixed(2)}/> : "loading"}
          </h2>
        </span>
      </div>
      <p>{100 * (parseInt(recommended.true)/(parseInt(recommended.true) + parseInt(recommended.false))).toFixed(2)}% of buyers recommend this product </p>
      {/* each column should display a ratio of #reviewsofthisstarcategory/#totalreviews */}
      <div onClick={e => props.setFilter(prevFilter => {return {...prevFilter, 5: !prevFilter[5]}})}>
        <p> 5 Stars: {ratings[5]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[5]}%`}}></span>
        </div>
      </div>
      <div onClick={e => props.setFilter(prevFilter => {return {...prevFilter, 4: !prevFilter[4]}})}>
        <p> 4 Stars: {ratings[4]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[4]}%`}}> </span>
        </div>
      </div>
      <div onClick={e => props.setFilter(prevFilter => {return {...prevFilter, 3: !prevFilter[3]}})}>
        <p> 3 Stars: {ratings[3]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[3]}%`}}> </span>
        </div>
      </div>
      <div onClick={e => props.setFilter(prevFilter => {return {...prevFilter, 2: !prevFilter[2]}})}>
        <p> 2 Stars: {ratings[2]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[2]}%`}}> </span>
        </div>
      </div>
      <div onClick={e => props.setFilter(prevFilter => {return {...prevFilter, 1: !prevFilter[1]}})}>
        <p> 1 Star: {ratings[1]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[1]}%`}}> </span>
        </div>
      </div>
      <br></br>
      <div>
        {props.isFiltered
        ?<span>Displaying
          {Object.keys(props.filter).map((key, i) => {return props.filter[key] ? <span key={i}> {key} </span>: null})}
          star reviews
          <br></br>
          <button onClick={e=> props.setFilter({1: false, 2: false, 3: false, 4: false, 5: false})}>Remove Filters</button>
        </span>
        : null}
      </div>
      {/* clicking each star level should also sort the review list by star amount clicked */}
    </div>
  )
}

export default RatingBreakdown;