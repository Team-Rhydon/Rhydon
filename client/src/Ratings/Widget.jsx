import React from "react";
import NewReviewForm from "./NewReviewForm.jsx";
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
//this component will be like the index.jsx file to hold all the ratings and review components so it can be
//easily integrated back into the page details
function RatingsWidget(props) {
  return (
    //separate breakdown component?
    <div>
      <RatingBreakdown />
      <ReviewList />
      <NewReviewForm />
    </div>
  )
}

export default RatingsWidget;