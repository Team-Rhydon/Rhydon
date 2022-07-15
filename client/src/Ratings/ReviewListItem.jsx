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
    <div className="ReviewTile" style={{border: "1px solid black", width: "100%"}} >
      <div className="ReviewHeader" style={{border: "1px solid black", width: "100%"}}>
        <span>{'★'.repeat(review.rating)} </span>
        <span className="nameAndDate">
          <span>{review.reviewer_name} @</span>
          <span style={{padding: "5px"}}>{review.date.slice(6, -14)}-{review.date.slice(0, 4)}</span>
        </span>
      </div>
      <div>
        <p style={{fontWeight: "bolder"}}>{review.summary.slice(0, 60)}</p>
        {review.body.length < 250
        ?<span>{review.body}</span>
        :<>
          <span>{review.body.slice(0, 249) + '...'}
            <button onClick={e=> setShortBody(true)}>Read More</button>
          </span>
        </>}
      </div>
      <br></br>
      <>
        <span>
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
      </>
      <>
        {!review.recommend
        ? null
        :<p>✓ I recommend this product</p>}
        {!review.response
        ? null
        : <span className="Review-Response">THIS IS WHERE RESPONSES WOULD GO IF I FOUND ANY</span>}
      </>
      <div>
        <span >Was this helpful?
          <button onClick={e => sendPut()}>({review.helpfulness}) </button>
          </span>
        <span className="Report">  Report </span>
      </div>
      <br></br>
    </div>
  )
}

export default ReviewListItem;