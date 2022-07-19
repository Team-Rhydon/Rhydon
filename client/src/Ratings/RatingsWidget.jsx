import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
const axios = require('axios');
const _ = require('lodash');

/** */
const RatingsWidget = (props)  => {
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
<<<<<<< HEAD
    <div ref={ref} className="RatingWidget">
      <div className="Ratings-Breakdown">
=======
    <div ref={props.ratingsRef} className="RatingWidget" style={{border: '1px solid black'}}>
      <div className="Ratings-Breakdown" style={{width: '20%'}}>
>>>>>>> e3adb13a1ab3ce02ba116c1f10e1669ddc9468e2
        <RatingBreakdown
          setFilter={setFilter}
          filter={filter}
          isFiltered={isFiltered}
          product={props.meta}
        />
        <ProductBreakdown traits={props.meta.characteristics} product={props.meta} />
      </div>
      <br></br>
      <div className="reviewBody">
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