import React from "react";
import NewReviewForm from "./NewReviewForm.jsx";
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
//this component will be like the index.jsx file to hold all the ratings and review components so it can be
//easily integrated back into the page details
function RatingsWidget(props) {
  //grab state from here and pass it down to components duh


  return (
    //separate breakdown component?
    <div className="RatingWidget" style={{border: "1px solid black"}}>
      <div>
        <RatingBreakdown />
      </div>
      <div className="reviewBody" style={{width: "100%", height:"100%"}}>
        <ReviewList />
        <NewReviewForm />
      </div>
    </div>
  )
}

export default RatingsWidget;