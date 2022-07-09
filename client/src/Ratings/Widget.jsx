import React from "react";
import NewReviewForm from "./NewReviewForm.jsx";
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
//this component will be like the index.jsx file to hold all the ratings and review components so it can be
//easily integrated back into the page details
function RatingsWidget(props) {
  return (
    //separate breakdown component?
    <div style={{border: "1px solid black", height:"40em"}}>
      <h1>Ratings Widget</h1>
      <RatingBreakdown />
      <ReviewList />
      <NewReviewForm />
    </div>
  )
}

export default RatingsWidget;