import React, {useState, useEffect, useRef} from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import SortDrop from './SortDrop.jsx';
const axios = require('axios');
import NewReviewForm from './NewReviewForm.jsx';
import Modal from './Modal.jsx';
import '../assets/modal.css';

function ReviewList({product, product_id, filter, isFiltered, details}) {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(5);
  const [sortStyle, setSortStyle] = useState('relevant');
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState(2); // Review List should only display 2 Review tiles at a time
  const [storage, setStorage] = useState([])
  const [total, setTotal] = useState(0);
  const prevSortStyleRef = useRef(sortStyle);
  // assumption here is that this component will be passed a product ID
  const params = {params: {
    product_id: product_id,
    page: page,
    count: count,
    sort: sortStyle
  }};

  useEffect(()=> {
    const stars = product.ratings;
    let ratings = 0;
    Object.values(stars).map((star) => {
      ratings += parseInt(star);
    });
    setTotal(ratings);
  }, [product_id]);

  useEffect(()=>{
    if (prevSortStyleRef.current !== sortStyle) {
      axios.get('/reviews', params)
        .then((response) => {
          setPage(()=> 1);
          setReviews(()=> 2);
          return setStorage((prevStorage)=> response.data.results);
        }).catch(err => console.log('error resetting reviews by style'));
    }
    prevSortStyleRef.current = sortStyle;
    axios.get('/reviews', params)
        .then((response) => {
          return setStorage(prevStorage=> {
            return [...prevStorage, ...response.data.results]});
        }).catch(console.log('err getting reviews'));
  }, [page, product_id, sortStyle]);

  //if sortstyle changes, reset page and empty storage

  function handleClick() {
    setReviews((prevReviews)=>{
      return prevReviews + 2;
    });
    if (page*count - reviews <= 3) {
      setPage((prevPage)=>{
        return prevPage + 1;
      });
    }
  }

  return (
    <div style={{border: '1px solid black'}}>
      {/* sort and dropdown buttons should always remain fixed outside of the scrollable area */}
      <div className="ReviewsList-Header">
        <SortDrop
          total={total}
          sort={setSortStyle}
        />
      </div>
      <div className="ReviewContainer-scrollable">
        {!storage.length?
        null:
        storage.slice(0, reviews).map((review, i) => {
          return (
            <div key={i}>
              <ReviewListItem
                filter={filter}
                review={review}
                isFiltered={isFiltered}
              />
            </div>
          );
        })}
      </div>
      {/* button will cause the next two tiles to appear by expanding the list (if they exist) */}
      {/* if there are enough reviews to fill up the entire page view, review list should be scrollable */}
      <div className="ReviewListFooter" style={{display: 'flex'}}>
        {reviews >= storage.length ?
          null:
          <div id="review-btn">
            <button onClick={handleClick}>More Reviews</button>
          </div>
        }
        <button onClick={()=>setShow(true)} > Modal/Review this Product</button>
        <Modal
          title={'Review This Product'}
          children={<NewReviewForm product={product} name={details.name} />}
          onClose={()=>setShow(false)}
          show={show}
        />
      </div>
    </div>
  );
}

export default ReviewList;
