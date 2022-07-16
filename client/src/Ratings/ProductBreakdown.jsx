import React from "react";

function ProductBreakdown(props) {
  let {Size, Width, Comfort, Quality, Length, Fit} = props.traits;
  return (
    //might be a good place to try a react table?
    //can probably replace all the spans with sliding components
    <div className="Product-Breakdown" style={{width: "33%"}}>
      {Object.entries(props.traits).map(([trait, {value}], index)=>{
        // console.log(trait);
        return (
          <div key ={index}>
            {!trait
              ? null
              :<div>
                <p> {trait}: {Number(value).toFixed(2)}</p>
                <div className="indicator">
                  <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (value/5).toFixed(3)}%`}}></span>
                  <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
                </div>
              </div>}
          </div>
       )
     })}

    </div>
  )
}
//seems like a good place to
export default ProductBreakdown;
{/* {!Width ? null
:<div>
  <p> Width: {Number(Width.value).toFixed(2)}</p>
  <div className="indicator">
    <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Width.value/5).toFixed(3)}%`}}></span>
    <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
  </div>
</div>}
{!Comfort ? null
:<div>
  <p> Comfort: {Number(Comfort.value).toFixed(2)}</p>
  <div className="indicator">
    <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Comfort.value/5).toFixed(3)}%`}}></span>
    <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
  </div>
</div> }
{!Quality ? null
:<div>
  <p> Quality: {Number(Quality.value).toFixed(2)}</p>
  <div className="indicator">
    <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Quality.value/5).toFixed(3)}%`}}></span>
    <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
  </div>
</div>}
{!Length ? null
:<div>
  <p> Length: {Number(Length.value).toFixed(2)}</p>
  <div className="indicator">
    <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Length.value/5).toFixed(3)}%`}}></span>
    <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
  </div>
</div>}
{!Fit ? null
:<div>
  <p> Fit: {Number(Fit.value).toFixed(2)}</p>
  <div className="indicator">
    <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (Fit.value/5).toFixed(3)}%`}}></span>
    <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
  </div>
</div>} */}