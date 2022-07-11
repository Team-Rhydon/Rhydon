import React from "react";

function ProductBreakdown(props) {
  let {Size, Width, Comfort, Quality, Length, Fit} = props.traits;

  return (
    //might be a good place to try a react table?
    //can probably replace all the spans with sliding components
    <div style={{border: "1px solid black"}}>
      {!Size ? null
      :<div>
        <p> Size</p>
        <div className="indicator">
          <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Size.value/5).toFixed(3)}%`}}></span>
          <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
        </div>
      </div>}
      {!Width ? null
      :<div>
        <p> Width</p>
        <div className="indicator">
          <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Width.value/5).toFixed(3)}%`}}></span>
          <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
        </div>
      </div>}
      {!Comfort ? null
      :<div>
        <p> Comfort</p>
        <div className="indicator">
          <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Comfort.value/5).toFixed(3)}%`}}></span>
          <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
        </div>
      </div> }
      {!Quality ? null
      :<div>
        <p> Quality</p>
        <div className="indicator">
          <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Quality.value/5).toFixed(3)}%`}}></span>
          <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
        </div>
      </div>}
      {!Length ? null
      :<div>
        <p> Length</p>
        <div className="indicator">
          <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Length.value/5).toFixed(3)}%`}}></span>
          <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
        </div>
      </div>}
      {!Fit ? null
      :<div>
        <p> Fit</p>
        <div className="indicator">
          <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Fit.value/5).toFixed(3)}%`}}></span>
          <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
        </div>
      </div>}
    </div>
  )
}
//seems like a good place to
export default ProductBreakdown;