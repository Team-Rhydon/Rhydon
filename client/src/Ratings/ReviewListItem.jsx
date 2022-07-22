import React, {useState, useEffect} from "react";
import Modal from "./Modal.jsx";
const axios = require('axios');

function ReviewListItem({review, filter, isFiltered}) {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');
  const [isHelpful, setIsHelpful] = useState(false);
  const [shortBody, setShortBody] = useState(250);

  let enhancePhoto = (value) => {
    //open modal displaying full image
    setShow(true);
    setUrl(value);
  }

  let onClose = event => {
    setShow(false)
  }

  let sendPut = (e, value) => {
    if (value === "helpful") {
      if (isHelpful) {
        return;
      }
      setIsHelpful(true);
      axios.put(`/reviews/helpful`, {review_id: review.review_id})
        .catch(err=> console.log(err));
    }
    if (value === "report") {
      axios.put(`/reviews/report`, {review_id: review.review_id})
        .catch(err=> console.log(err));
    }
  }
  //currently the ratings widget pulls all available reviews as API doesn't have ability to directly search for reviews of a particular star rating
  // if (isFiltered) {
  //   if (!filter[review.rating]) {
  //     return null;
  //   }
  // }
  return (
    <div className="ReviewTile" >
      <div className="ReviewHeader">
        {/* <span className="ReviewTitle"> */}
          <span className="ReviewRating">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</span>
        {/* </span> */}
        <span className="ReviewSummary">{review.summary.slice(0, 60)}</span>
        <span className="nameAndDate">
          <span>by {review.reviewer_name} on </span>
          <span>{review.date.slice(6, -14)}-{review.date.slice(0, 4)}</span>
        </span>
      </div>
      <div className="ReviewBody">
        {review.body.length > shortBody
          ?<span className="ReviewText">{review.body.slice(0, 249) + '...'}
              <button className="read-more-btn" onClick={e=> setShortBody(1000)}>Read More</button>
            </span>
          :<span className="ReviewText">{review.body}</span>
        }
        <span className="ReviewPhotos">
          {!review.photos
            ?null
            :review.photos.map(photo=> photo.url ==="text"
              ? null
              :<img
                key={photo.id}
                style={{height: "5vh", width: "5vw"}}
                onClick={()=> enhancePhoto(photo.url)}
                src={photo.url}
                />)}
              <Modal
                children={<img src={url}/>}
                show={show}
                onClose={onClose}
              />
        </span>
        {!review.response
          ? null
          : <span className="Review-Response">review.</span>
        }
        {!review.recommend
          ? null
          :<span className="ReviewRecommend"><p>✓ I recommend this product</p></span>
        }
        <div className="Review-Puts">
          <span >Was this helpful?
            <button className="put-btn" onClick={e => sendPut(e, "helpful")}>({(isHelpful? 1 : 0) + review.helpfulness}) </button>
            </span>
          <span className="Report">||
            <button className="put-btn" onClick={e => sendPut(e, "report")}> Report</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ReviewListItem;