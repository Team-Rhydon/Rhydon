import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
const axios = require('axios');
const _ = require('lodash');

/** */
function RatingsWidget(props) {
  const [filter, setFilter] = useState(
      {1: false, 2: false, 3: false, 4: false, 5: false});
  const [isFiltered, toggleFilter] = useState(false);

  useEffect(()=> {
    if (_.every(Object.values(filter), function(bool){return bool === true})) {
      setFilter({1: false, 2: false, 3: false, 4: false, 5: false});
    }
    if (_.every(Object.values(filter), function(bool){return bool === false})) {
      toggleFilter(false);
    }
    if (_.some(Object.values(filter), function(bool){return bool=== true})) {
      toggleFilter(true);
    }
  }, [filter]);


  return (
    <div className="RatingWidget" style={{border: '1px solid black'}}>
      <div className="Ratings-Breakdown">
        <RatingBreakdown
          setFilter={setFilter}
          filter={filter}
          isFiltered={isFiltered}
          product={props.meta}
        />
        <ProductBreakdown traits={props.meta.characteristics}/>
      </div>
      <br></br>
      <div className="reviewBody" style={{width: '100%', height: '100%'}}>
        <ReviewList
          product={props.meta}
          product_id={props.meta.product_id}
          filter={filter}
          isFiltered={isFiltered}
          details={props.details}
        />
      </div>
    </div>
  )
}

export default RatingsWidget;