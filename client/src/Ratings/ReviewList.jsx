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
  const [storage, setStorage] = useState([]);
  const [total, setTotal] = useState(0);
  const prevSortStyleRef = useRef(sortStyle);
  const params = {params: {
    product_id: product_id,
    page: page,
    count: count,
    sort: sortStyle,
  }};

  useEffect(()=> {
    const stars = product.ratings;
    let ratings = 0;
    Object.values(stars).map((star) => {
      ratings += parseInt(star);
    });
    setTotal(ratings);
    setCount(ratings);
  }, [product_id]);

  useEffect(()=>{
    if (prevSortStyleRef.current !== sortStyle) {
      axios.get('/reviews', params)
          .then((response) => {
            setPage(()=> 1);
            setReviews(()=> 2);
            return setStorage((prevStorage)=> response.data.results);
          }).catch((err) => console.log('error resetting reviews by style'));
    }
    prevSortStyleRef.current = sortStyle;
    axios.get('/reviews', params)
        .then((response) => {
          setStorage(prevStorage=> {
            return [...response.data.results]});
        }).catch(err=> console.log('err getting revierrews'));
  }, [product_id, sortStyle, count]);

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
    <div className="ReviewList">
      <div className="ReviewsList-Header">
        <SortDrop
          total={total}
          sort={setSortStyle}
        />
      </div>
      <div className="ReviewContainer-scrollable">
        {!storage.length?
          null:
          storage
              .filter((review)=> !isFiltered && !filter[review.rating] || isFiltered && filter[review.rating])
              .slice(0, reviews)
              .map((review, i) => {
                return (
                  <ReviewListItem
                    key={i}
                    filter={filter}
                    review={review}
                    isFiltered={isFiltered}
                  />
                );
              })
        }
      </div>
      <div className="ReviewListFooter" style={{display: 'flex'}}>
        <button
          className={reviews >= storage.length ? "review-btn-invis" : "review-btn"}
          onClick={handleClick}
          >
            More Reviews
        </button>
        <button id="open-modal-btn" onClick={()=>setShow(true)} > Review this Product</button>
        <Modal
          title={'Review This Product: Tell us about the ' + details.name}
          children={<NewReviewForm product={product} details={details} />}
          onClose={()=>setShow(false)}
          show={show}
        />
      </div>
    </div>
  );
}

export default ReviewList;
