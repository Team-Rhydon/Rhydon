import React from "react";
import ReviewListItem from "./ReviewListItem.jsx";
import SortDrop from "./SortDrop.jsx";

//Review List should only display 2 Review tiles at a time
function ReviewList(props) {
  return (
    <div style={{border: "1px solid black"}}>
      {/* sort and dropdown buttons should always remain fixed outside of the scrollable area */}
      <SortDrop />
      <h3>Review List always starts as two separate review tiles</h3>
      <ReviewListItem />
      <br></br>
      <ReviewListItem />
      {/* button will cause the next two tiles to appear by expanding the list (if they exist) */}
      <button>More Reviews</button>
      {/* if there are enough reviews to fill up the entire page view, review list should be scrollable */}
    </div>
  )
}

export default ReviewList;