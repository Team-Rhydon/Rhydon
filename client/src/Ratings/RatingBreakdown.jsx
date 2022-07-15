import React, {useState, useEffect} from "react";
const axios = require("axios");
import StarRating from "../Related/StarRating.jsx";

function RatingBreakdown({setFilter, filter, isFiltered, product }) {
  const [ratings, setRatings] = useState(product.ratings);
  // const [recommended, setRecommended] = useState(product.recommended)
  let {recommended} = product;
  const totalReviews = Number(ratings[5]) + Number(ratings[4]) + Number(ratings[3]) + Number(ratings[2]) + Number(ratings[1]);
  const rating = 5*(ratings[5])/totalReviews + 4 * Number(ratings[4])/totalReviews + 3*Number(ratings[3])/totalReviews + 2*Number(ratings[2])/totalReviews + Number(ratings[1])/totalReviews;
  const ratingBars = {
    5:  (Number(ratings[5])/totalReviews).toFixed(2),
    4:  (Number(ratings[4])/totalReviews).toFixed(2),
    3:  (Number(ratings[3])/totalReviews).toFixed(2),
    2:  (Number(ratings[2])/totalReviews).toFixed(2),
    1:  (Number(ratings[1])/totalReviews).toFixed(2)
  }

  return (
    <div style={{border: "1px solid black", width: "100%"}}>
      <div>
        <p>Rating and Reviews </p>
        <span>
          <h2>{rating.toFixed(2)}
          {rating
            ? <StarRating rating={rating.toFixed(4)}/>
            : "loading"
          }
          </h2>
        </span>
      </div>
      <p>{100 * (Number(recommended.true)/(Number(recommended.true) + Number(recommended.false))).toFixed(2)}% of buyers recommend this product </p>
      {/* each column should display a ratio of #reviewsofthisstarcategory/#totalreviews */}
      {Object.keys(ratingBars).sort((a, b)=> {a-b; return -1}).map((star, i) => {
        return (
          <div key={i} onClick={e => setFilter(prevFilter => {prevFilter[star] = !prevFilter[star]; return {...prevFilter}})}>
            <p> {star} Stars: </p>
            <div className="meter">
              <span style={{width: `${100 * ratingBars[star]}%`}}></span>
            </div>
          </div>)
      })}
      <br></br>
      <div>
        {isFiltered
        ?<span>Displaying
          {Object.keys(filter).map((key, i) => {return filter[key] ? <span key={i}> {key} </span>: null})}
          star reviews
          <br></br>
          <button onClick={e=> setFilter({1: false, 2: false, 3: false, 4: false, 5: false})}>Remove Filters</button>
        </span>
        : null}
      </div>
      {/* clicking each star level should also sort the review list by star amount clicked */}
    </div>
  )
}

export default RatingBreakdown;
{/*
      <div onClick={e => setFilter(prevFilter => {return {...prevFilter, 5: !prevFilter[5]}})}>
        <p> 5 Stars: {ratings[5]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[5]}%`}}></span>
        </div>
      </div>
      <div onClick={e => setFilter(prevFilter => {return {...prevFilter, 4: !prevFilter[4]}})}>
        <p> 4 Stars: {ratings[4]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[4]}%`}}> </span>
        </div>
      </div>
      <div onClick={e => setFilter(prevFilter => {return {...prevFilter, 3: !prevFilter[3]}})}>
        <p> 3 Stars: {ratings[3]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[3]}%`}}> </span>
        </div>
      </div>
      <div onClick={e => setFilter(prevFilter => {return {...prevFilter, 2: !prevFilter[2]}})}>
        <p> 2 Stars: {ratings[2]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[2]}%`}}> </span>
        </div>
      </div>
      <div onClick={e => setFilter(prevFilter => {return {...prevFilter, 1: !prevFilter[1]}})}>
        <p> 1 Star: {ratings[1]}</p>
        <div className="meter">
          <span style={{width: `${100 * ratingBars[1]}%`}}> </span>
        </div>
      </div> */}