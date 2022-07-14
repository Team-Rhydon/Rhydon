import React, {useState, useEffect} from "react";
import NewReviewForm from "./NewReviewForm.jsx";
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
const axios = require("axios");
const _ = require('lodash');
//this component will be like the index.jsx file to hold all the ratings and review components so it can be
//easily integrated back into the page details
function RatingsWidget(props) {
  //grab state from here and pass it down to components duh
  const [product, setProduct] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const [filter, setFilter] = useState({1: false, 2: false, 3: false, 4: false, 5: false})
  const [isFiltered, toggleFilter] = useState(false)

  useEffect(()=> {
    axios.get('/reviews/meta', {params: {product_id: 40344}})
    .then(response => {
      console.log(response);
      setProduct(response.data);
      setCharacteristics(response.data.characteristics);
    })
  }, [])

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
  }, [filter])


  return (
    //separate breakdown component?
    <div className="RatingWidget" style={{border: "1px solid black"}}>
      <div style={{width: "20%"}}>
        <RatingBreakdown
          setFilter={setFilter}
          filter={filter}
          isFiltered={isFiltered}
        />
        <ProductBreakdown traits={characteristics}/>
      </div>
      <div className="reviewBody" style={{width: "80%", height:"100%"}}>
        <ReviewList
          product={props.product}
          product_id={product.product_id}
          filter={filter}
          isFiltered={isFiltered}
        />
      </div>
    </div>
  )
}

export default RatingsWidget;