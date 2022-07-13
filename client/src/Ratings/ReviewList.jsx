import React, {useState, useEffect} from "react";
import ReviewListItem from "./ReviewListItem.jsx";
import SortDrop from "./SortDrop.jsx";
const axios = require("axios");
import NewReviewForm from "./NewReviewForm.jsx";
import Modal from "./Modal.jsx";
import "../assets/modal.css";

function ReviewList(props) {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState(2); //Review List should only display 2 Review tiles at a time
  const [storage, setStorage] = useState([]);
  const [total, setTotal] = useState(0);
  const [sortStyle, setSortStyle] = useState('')

  //assumption here is that this component will be passed a product ID
  let params = {params: {
    product_id: props.product_id,
    page: page,
    count: count,
    sort: sortStyle
  }}

  useEffect(()=> {
    axios.get('/reviews/meta', params)
      .then(response => {
        let stars = response.data.ratings;
        let ratings = 0;
        Object.values(stars).map(star => {
          ratings += parseInt(star);
        });
        setTotal(ratings);
      })
  }, [props.product_id])

  useEffect(()=>{
    axios.get('/reviews', params)
      .then(response => {
        setStorage(prevStorage => {
          return [...prevStorage, ...response.data.results];
        })
      })
      .catch(err => console.log(err));
  }, [page, props.product_id])

  useEffect(()=>{
    axios.get('/reviews', params)
      .then(response => {
        setStorage(response.data.results);
        setPage(1);
        })

      .catch(err => console.log(err));
  }, [sortStyle])

  function handleClick(){
    setReviews(prevReviews=>{
      return prevReviews + 2;
    })
    if (page*count - reviews <= 2) {
      setPage((prevCount)=>{
        return prevCount + 1;
      })
    }
  }

  return (
    <div style={{border: "1px solid black"}}>
      {/* sort and dropdown buttons should always remain fixed outside of the scrollable area */}
      <div className="ReviewsList-Header">
        <SortDrop
          total={total}
          sort={setSortStyle}
        />
      </div>
      <div className="ReviewContainer-scrollable">
        {!storage
        ?null
        :storage.slice(0, reviews).map((result, i) => {
          return (
            <div key={i}>
              <ReviewListItem
                filter={props.filter}
                review={result}
                isFiltered={props.isFiltered}
              />
            </div>
            )
        })}
      </div>
      {/* button will cause the next two tiles to appear by expanding the list (if they exist) */}
      {/* if there are enough reviews to fill up the entire page view, review list should be scrollable */}
      <div className="ReviewListFooter" style={{display: "flex"}}>
        {reviews >= page*count
          ? null
          :<div id="review-btn">
            <button onClick={handleClick}>More Reviews</button>
          </div>
        }
        <button onClick={()=>setShow(true)} > Modal/Review this Product</button>
        <Modal
          children={<NewReviewForm />}
          onClose={()=>setShow(false)}
          show={show}
        />
      </div>
    </div>
  )
}

export default ReviewList;