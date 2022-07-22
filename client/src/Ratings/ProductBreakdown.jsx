import React, {} from 'react';
import CircularProgressBar from './CircularProgressBar.jsx';

function ProductBreakdown(props) {
  // const {Size, Width, Comfort, Quality, Length, Fit} = props.traits;
  // const {recommended} = props.product;

  const descriptions = {
    Size: ['Too Small', 'Too Large'],
    Comfort: ['Uncomfort.', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Quality: ['Poor', 'Perfect'],
    Fit: ['Runs Tight', 'Runs long'],
    Width: ['Too narrow', 'Too wide'],
  };

  return (

    <div className="Product-Breakdown">
      {Object.entries(props.traits).map(([trait, {value}], index)=>{
        return (
          <div key ={index}>
            {!trait?
              null:
              <div className="product-score">
                <span className="PD-high">{descriptions[trait][1]}</span>
                <CircularProgressBar
                  strokeWidth='5'
                  sqSize="75"
                  percentage={(Number(value)/.05).toFixed(0)}
                  trait={trait}
                  value={Number(value).toFixed(2)}
                />
                <span className="PD-low">{descriptions[trait][0]}</span>
                <br></br>
              </div>}
          </div>
        );
      })}
    </div>
  );
}

export default ProductBreakdown;
