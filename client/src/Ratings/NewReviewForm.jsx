import React, {useState, useRef} from "react";
import Body from "./NewReviewPages/Body.jsx";
import Characteristics from "./NewReviewPages/Characteristics.jsx";
import ReviewPhotos from "./NewReviewPages/ReviewPhotos.jsx";
import Summary from "./NewReviewPages/Summary.jsx";
import UserInfo from "./NewReviewPages/UserInfo.jsx";
import Button from './NewReviewPages/Button.jsx';
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
    1:(<div className="tab">
        <div className="star-rating">
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
          <span>{rating === 0 ? null : rating + " STAR RATING -"}  {[null, "Poor", "Fair", "Average", "Good", "Great!"][rating]}</span>
        </div>
        {ratingRef.current === rating
          ? null
          :<div>
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
          </div>}
      </div>),
    2:(<div className="tab">
        <h3> *Would you recommend this product to others?*</h3>
        <span>I would:
          {recommended === null
            ?<span className="recommend"> </span>
            :<span className="recommend">{recommended ? "✓" : "✗"} </span> }
        </span>
        <div className="container-rbtn">
          <Button color={JSON.stringify(recommended)} text={"Yes"} setStatus={setRecommended} />
          <Button color={JSON.stringify(recommended)} text={"No"} setStatus={setRecommended} />
        </div>
        <div></div>
        {recommendedRef.current === recommended
          ?null
          :<div>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
          </div>}
      </div>),
    3:(<div className="tab">
      <h3>*Please rate the {props.details.name} on the following*: </h3>
        <Characteristics chars={props.product.characteristics} setChars={setCharacteristics} />
        {characteristicsRef.current === characteristics
        ?null
        :<div>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
        </div>}
      </div>),
    4:(<div className="tab">
      <h3>Please give a one sentence summary of how you feel about the {props.details.name}</h3>
        <Summary setSum={setSummary} />
        <div>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
        </div>
      </div>),
    5:(<div className="tab">
      <h3>*Please let us know exactly how you feel about the {props.details.name}.* </h3>
        <Body  setBody={setBody} />
        {bodyRef.current === body
        ?null
        :<div>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
        </div>}
        </div>),
    6:( <div className="tab">
      <h3>Enhance your review with your photos!</h3>
        <ReviewPhotos setPhotos={setPhotos} />
        <div>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
        </div>
      </div>),
    7:(<div className="tab">
      <h3>*Enter your info*</h3>
          <UserInfo setName={setName} setEmail={setEmail} />
          {nameRef.current === name && emailRef.current === email
            ?null
            :<div>
            {page > 1 ?<button type="button" id="prevBtn" onClick={()=>setPage(prevPage=> prevPage-1)}>Previous</button>: null}
            <button type="button" id="nextBtn" onClick={()=>setPage(prevPage=> prevPage+1)}>Next</button>
        </div>}
      </div> ),
    8:<div className="tab">
        <h3>Please take a moment to verify your review!</h3>
        <div className="Submit-Form">
          <div className="Submit-Form-page row-a" onClick={()=>setPage(1)}>
            <span className="form-col-1">Rating: </span>
            <span className="form-col-2">{rating} Stars</span>
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(2)}>
            <span className="form-col-1">I would recommend this product: </span>
            <span className="form-col-2">{recommended ? "True" : "False"}</span>
          </div>
          <div className="Submit-Form-page row-a" onClick={()=>setPage(3)}>
            <span className="form-col-1">Characteristics: </span>
            {!characteristics
            ? null
            :<span className="form-col-2">
              {Object.entries(props.product.characteristics).map(([char, {id}]) => {
              return (
              <span key={id}>
                <span>{char}: {characteristics[id]}</span>
                <br></br>
              </span>)
            })}
            </span>}
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(4)}>
            <span className="form-col-1">Summary: </span>
            <span className="form-col-2">{summary.slice(0, 20)}</span>
          </div>
          <div className="Submit-Form-page row-a" onClick={()=>setPage(5)}>
            <span className="form-col-1">Review: </span>
            <span className="form-col-2">{body.slice(0, 20)}</span>
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(6)}>
            <span className="form-col-1">photos: </span>
            <span className="form-col-2"> {photos.length}</span>
          </div>
          <div className="Submit-Form-page row-a" onClick={()=>setPage(7)}>
              <span className="form-col-1">Nickname: </span>
              <span className="form-col-2">{name.slice(0,20)}</span>
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(7)}>
            <span className="form-col-1">Email: </span>
            <span className="form-col-2">{email.slice(0.20)}</span>
          </div>
        </div>
        <br></br>
        <div>
          <button className="submit-btn" onClick={e=> sendPostRequest(e)}>Post your review!</button>
        </div>
      </div>
  };

  return (
      <div id="reviewForm">
        {!pageForm[page] ? "loading" : pageForm[page]}
      </div>
  )
}


export default NewReviewForm;