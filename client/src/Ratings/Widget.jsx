import React, {useState, useEffect} from "react";
import NewReviewForm from "./NewReviewForm.jsx";
import ReviewList from "./ReviewList.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
const axios = require("axios");
//this component will be like the index.jsx file to hold all the ratings and review components so it can be
//easily integrated back into the page details
function RatingsWidget(props) {
  //grab state from here and pass it down to components duh
  const [product, setProduct] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  useEffect(()=> {
    axios.get('/reviews/meta', {params: {product_id: 40344}})
    .then(response => {
      setCharacteristics(response.data.characteristics);
    })
  }, [])

  return (
    //separate breakdown component?
    <div className="RatingWidget" style={{border: "1px solid black"}}>
      <div style={{width: "20%"}}>
        <RatingBreakdown />
        <ProductBreakdown traits={characteristics}/>
      </div>
      <div className="reviewBody" style={{width: "80%", height:"100%"}}>
        <ReviewList />
      </div>
    </div>
  )
}

export default RatingsWidget;