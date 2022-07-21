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
    <div className="Star-Ratings">
      {/* each column should display a ratio of #reviewsofthisstarcategory/#totalreviews */}
      <div className="Ratings-Reviews-Summary">
        <h2>Rating and Reviews </h2>
        <span>
          <h2 style={{textAlign: "center"}}>{rating.toFixed(2)}
          <br></br>
            {rating
              ?<StarRating className="scaled-stars" rating={rating.toFixed(4)}/>
              :"loading"
            }
          </h2>
        </span>
        <p>{100 * (Number(recommended.true)/(Number(recommended.true) + Number(recommended.false))).toFixed(2)}% of buyers recommend this product </p>
      </div>
      <div className="Star-Bars">
        {Object.keys(ratingBars).sort((a, b)=> {a-b; return -1}).map((star, i) => {
          return (
            <div className="StarNumber"
              key={i}
              onClick={e => setFilter(prevFilter => {prevFilter[star] = !prevFilter[star]; return {...prevFilter}})}>

              <p> {star} Stars: {parseInt(100 * ratingBars[star])}%</p>
              <div className="meter">
                <span style={{width: `${100 * ratingBars[star]}%`}}></span>
              </div>
            </div>)
        })}
        <div className="spacer">
          {isFiltered
            ?<span>Displaying
              {Object.keys(filter).map((key, i) => {return filter[key] ? <span key={i}> {key} </span>: null})}
              star reviews
              <button onClick={e=> setFilter({1: false, 2: false, 3: false, 4: false, 5: false})}>Remove Filters</button>
            </span>
            :<div><br></br><br></br></div>
          }
        </div>
      </div>
      <br></br>
      {/* clicking each star level should also sort the review list by star amount clicked */}
    </div>
  )
}

export default RatingBreakdown;
