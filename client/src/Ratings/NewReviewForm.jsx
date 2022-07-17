import React, {useState, useRef} from "react";
import Body from "./NewReviewPages/Body.jsx";
import Characteristics from "./NewReviewPages/Characteristics.jsx";
import ReviewPhotos from "./NewReviewPages/ReviewPhotos.jsx";
import Summary from "./NewReviewPages/Summary.jsx";
import UserInfo from "./NewReviewPages/UserInfo.jsx";
const axios = require("axios");

function NewReviewForm(props) {
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(0);
  const [recommended, setRecommended] = useState(null);
  const [characteristics, setCharacteristics] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState(['']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  let ratingRef = useRef(rating);
  let recommendedRef = useRef(recommended);
  let characteristicsRef = useRef(characteristics);
  let bodyRef = useRef(body);
  let nameRef = useRef(name);
  let emailRef = useRef(email);

  let sendPostRequest =(event) => {

    let params = {product_id: Number(props.product.product_id)};
    let data = {
      ...params,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommended,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    };
    let options = {
      url: '/reviews',
      method: 'post',
      params: params,
      data: data
    }
    console.log(options);
    axios(options)
      .then(()=>  alert('successfully posted! please close form'))
      .catch(err => {return alert('error! please review form entries');console.log('err posting data')});
  }

  const pageForm = {
    1:(<div className="star-rating">
      <h3>*How would your rate the {props.details.name}?*</h3>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="star-button"
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}>
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <p>{rating === 0 ? null : rating + " STAR RATING -"}  {[null, "Poor", "Fair", "Average", "Good", "Great!"][rating]}</p>
      <div style={{overflow: "auto"}}>
          <div style={{float: "right"}}>
            {ratingRef.current !== rating ?<button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button> : null}
          </div>
        </div>
      </div>),
    2:(<div className="tab">
        <h3> *Would you recommend this product to others?*</h3>
        <p>{recommended === null ? null : recommended ? "YES" : "NO"}</p>
        <br></br>
        <button
          type="button"
          onClick={()=>setRecommended(true)}
          > Yes
        </button>
        <button
          type="button"
          onClick={()=> setRecommended(false)}
          > No
        </button>
        <div style={{overflow: "auto"}}>
          <div style={{float: "right"}}>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            {recommendedRef.current !== recommended ?<button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button> : null}
          </div>
        </div>
      </div>),
    3:(<div className="tab">
      <h3>*Please rate the {props.details.name} on the following*: </h3>
        <Characteristics chars={props.product.characteristics} setChars={setCharacteristics} />
        <div style={{overflow: "auto"}}>
          <div style={{float: "right"}}>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            {characteristicsRef.current !== characteristics ?<button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button> : null}
          </div>
        </div>
      </div>),
    4:(<div className="tab">
      <h3>Please give a one sentence summary of how you feel about the {props.details.name}</h3>
        <Summary setSum={setSummary} />
        <div style={{overflow: "auto"}}>
          <div style={{float: "right"}}>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
          </div>
        </div>
      </div>),
    5:(<div className="tab">
      <h3>*Please let us know exactly how you feel about the {props.details.name}.* </h3>
        <Body  setBody={setBody} />
        <div style={{overflow: "auto"}}>
          <div style={{float: "right"}}>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            {bodyRef.current !== body ?<button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button> : null}
          </div>
        </div>
        </div>),
    6:( <div className="tab">
      <h3>Enhance your review with your photos!</h3>
        <ReviewPhotos setPhotos={setPhotos} />
        <div style={{overflow: "auto"}}>
          <div style={{float: "right"}}>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
          </div>
        </div>
      </div>),
    7:(<div className="tab">
      <h3>*New phone who dis?*</h3>
          <UserInfo setName={setName} setEmail={setEmail} />
          <div style={{overflow: "auto"}}>
          <div style={{float: "right"}}>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            {nameRef.current !== name && emailRef.current !== email ?<button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button> : null}
          </div>
        </div>
      </div> ),
    8:<>
        <h3>Please take a moment to verify your review!</h3>
        <table>
        </table>
        <button onClick={e=> sendPostRequest(e)}>Post your review!</button>
      </>
  };

  return (
      <div id="reviewForm">
        {!pageForm[page] ? "loading" : pageForm[page]}
      </div>
  )
}


export default NewReviewForm;