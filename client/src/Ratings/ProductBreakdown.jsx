import React from "react";

function ProductBreakdown(props) {
  return (
    //might be a good place to try a react table?
    //can probably replace all the spans with sliding components
    <span style={{border: "1px solid black"}}>
      <span>Size</span>
      <span>Width</span>
      <span>Comfort</span>
      <span>Quality</span>
      <span>Length</span>
      <span>Fit</span>
    </span>
  )
}
//seems like a good place to