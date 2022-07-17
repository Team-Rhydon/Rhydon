import React, {ReactElement} from "react";
import CircularProgressBar from './CircularProgressBar.jsx';

function ProductBreakdown(props) {
  let {Size, Width, Comfort, Quality, Length, Fit} = props.traits;
  let {recommended} = props.product;

  const descriptions = {
    Size: ['Too Small', 'Too Large'],
    Comfort: ['Uncomfort.', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Quality: ['Poor', 'Perfect'],
    Fit: ['Runs Tight', 'Runs long'],
    Width: ['Too narrow', 'Too wide']
  }

  return (

    <div className="Product-Breakdown">
      {/* <p>{100 * (Number(recommended.true)/(Number(recommended.true) + Number(recommended.false))).toFixed(2)}% of buyers recommend this product </p> */}

      {Object.entries(props.traits).map(([trait, {value}], index)=>{
        // console.log(trait);
        return (
          <div key ={index}>
            {!trait
              ? null
              :<div className="product-score">
                {/* <span> {trait}: {Number(value).toFixed(2)}</span> */}
                <span className="PD-low">{descriptions[trait][0]}</span>
                <CircularProgressBar strokeWidth='5' sqSize="75" percentage={(Number(value)/.05).toFixed(0)} trait={trait} value={Number(value).toFixed(2)} />
                <span className="PD-high">{descriptions[trait][1]}</span>
                {/* <div className="indicator">
                  <span className="indicator-bar" style={{backgroundColor: "blue", width: `${100 * (value/5).toFixed(3)}%`}}></span>
                  <span className="marker" style={{backgroundColor: "red", width: "2%"}}></span>
                </div> */}
                  {/* <span className="trait-description">
                  </span> */}
                  <br></br>
              </div>}
          </div>
       )
     })}
    </div>
  )
}
//seems like a good place to
export default ProductBreakdown;
