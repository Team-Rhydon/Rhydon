import React, {useState} from "react";
import Modal from "./Modal.jsx";

function ReviewListItem({review, filter, isFiltered}) {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');
  const [shortBody, setShortBody] = useState(true);

  let enhancePhoto = (value) => {
    //open modal displaying full image
    setShow(true);
    setUrl(value);
  }

  let onClose = event => {
    setShow(false)
  }

  let sendPut = () => {
    console.log('sending put');
  }

  if (isFiltered) {
    if (!filter[review.rating]) {
      return null;
    }
  }
  return (
    <div className="ReviewTile" >
      <div className="ReviewHeader">
        {/* <span className="ReviewTitle"> */}
          <span className="ReviewRating">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</span>
        {/* </span> */}
        <span className="ReviewSummary">{review.summary.slice(0, 60)}</span>
        <span className="nameAndDate">
          <span>{review.reviewer_name} @</span>
          <span>{review.date.slice(6, -14)}-{review.date.slice(0, 4)}</span>
        </span>
      </div>
      <div className="ReviewBody">
        {review.body.length < 250
        ?<span className="ReviewText">{review.body}</span>
        :<>
          <span className="ReviewText">{review.body.slice(0, 249) + '...'}
            <button onClick={e=> setShortBody(false)}>Read More</button>
          </span>
        </>}
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
        {!review.recommend
        ? null
        :<span className="ReviewRecommend"><p>✓ I recommend this product</p></span>}
        <div className="Review-Puts">
          <span >Was this helpful?
            <button onClick={e => sendPut()}>({review.helpfulness}) </button>
            </span>
          <span className="Report">  Report </span>
        </div>
        {!review.response
        ? null
        : <span className="Review-Response">THIS IS WHERE RESPONSES WOULD GO IF I FOUND ANY</span>}
      </div>
    </div>
  )
}

export default ReviewListItem;