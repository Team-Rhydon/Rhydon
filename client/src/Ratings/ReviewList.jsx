import React, {useState, useEffect} from "react";
import ReviewListItem from "./ReviewListItem.jsx";
import SortDrop from "./SortDrop.jsx";
const axios = require("axios");
import NewReviewForm from "./NewReviewForm.jsx";
import Modal from "./Modal.jsx";
import "../assets/modal.css";

//Review List should only display 2 Review tiles at a time
function ReviewList(props) {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(2);
  const [show, setShow] = useState(false);

  //assumption here is that this component will be passed a product ID
  let params = {params: {
    product_id: 40344,//props.product_id
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

  return (
    <div style={{border: "1px solid black"}}>
      {/* sort and dropdown buttons should always remain fixed outside of the scrollable area */}
      <div className="ReviewsList-Header">
        <SortDrop />

      </div>
      <div className="ReviewContainer-scrollable">
        {!product.results
        ?null
        :product.results.map((result, i) => {
          return (
            <div key={i}><ReviewListItem review={result} /> </div>
            )
        })}
      </div>
      {/* button will cause the next two tiles to appear by expanding the list (if they exist) */}
      {/* if there are enough reviews to fill up the entire page view, review list should be scrollable */}
      <div className="ReviewListFooter" style={{display: "flex"}}>
        <div id="review-btn"><button onClick={handleClick}>More Reviews</button></div>
        <button onClick={()=>setShow(true)} > Modal/Review this Product</button>
        <Modal onClose={()=>setShow(false)} show={show} />
      </div>
    </div>
  )
}

export default ReviewList;