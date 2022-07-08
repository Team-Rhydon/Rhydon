import React from "react";

function RatingBreakdown(props) {
  return (
    <div style={{border: "1px solid black", width: "15%"}}>
      RatingBreakdown Component
      <h5>Total number of reviews</h5>
      {/* each column should display a ratio of #reviewsofthisstarcategory/#totalreviews */}
      <span> 5 star </span>
      <br></br>
      <span> 4 star </span>
      <br></br>
      <span> 3 star </span>
      <br></br>
      <span> 2 star </span>
      <br></br>
      <span> 1 star </span>
      {/* clicking each star level should also sort the review list by star amount clicked */}
    </div>
  )
}

export default RatingBreakdown;