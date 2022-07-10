import React, {useState, useEffect} from "react";
import ReviewListItem from "./ReviewListItem.jsx";
import SortDrop from "./SortDrop.jsx";
const axios = require("axios");

//Review List should only display 2 Review tiles at a time
function ReviewList(props) {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(2);

  //assumption here is that this component will be passed a product ID
  let params = {params: {
    product_id: 40344,
    page: page,
    count: count
  }}
  useEffect(()=>{
    axios.get('/reviews', params)
      .then(response => {
        console.log(response);
        setProduct(response.data)
      })
      .catch(err => console.log(err));
  }, [count])

  function handleClick(){
    setCount((prevCount)=>{
      return prevCount + 2;
    })
  }
  console.log(product.results);
  return (
    <div style={{border: "1px solid black"}}>
      {/* sort and dropdown buttons should always remain fixed outside of the scrollable area */}
      <SortDrop />
      <div className="ReviewContainer-scrollable">
        {!product.results
        ?null
        :product.results.map((result, i) => {
          return (
            <div><ReviewListItem key={i} review={result} /> </div>
            )
        })}
      </div>
      {/* button will cause the next two tiles to appear by expanding the list (if they exist) */}
      <button onClick={handleClick}>More Reviews</button>
      {/* if there are enough reviews to fill up the entire page view, review list should be scrollable */}
    </div>
  )
}

export default ReviewList;