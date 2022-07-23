import React, {useState, useRef} from 'react';
import Characteristics from './NewReviewPages/Characteristics.jsx';
// import ReviewPhotos from "./NewReviewPages/ReviewPhotos.jsx";
import UserInfo from './NewReviewPages/UserInfo.jsx';
import Button from './NewReviewPages/Button.jsx';
const axios = require('axios');

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
  // refactor using usereducer

  const sendPostRequest =(event) => {
    const params = {product_id: Number(props.product.product_id)};
    const data = {
      ...params,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommended,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics,
    };
    const options = {
      url: '/reviews',
      method: 'post',
      params: params,
<<<<<<< HEAD
      data: data
    }
    //naive solution to check over form data, working on validation API solution
    const validate = (data) => {
      const errArray = [];
      if (body.length < 50) {
        errArray.push('Review is too short!')
      }
      if (!email.includes('.')){
        errArray('Provided email format not recognized')
      }
      return errArray;
    }


=======
      data: data,
    };
>>>>>>> main
    axios(options)
        .then(()=> alert('successfully posted! please close form'))
        .catch((err) => {
          return alert('error! please review form entries'); console.log('err posting data');
        });
  };

  const pageForm = {
<<<<<<< HEAD
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
          <span className={rating === 0 ? "hide" : "" }> {rating} STAR RATING- {[null, "Poor", "Fair", "Average", "Good", "Great!"][rating]}</span>
        </div>
        <h3> *Would you recommend this product to others?*</h3>
        <span className="recommend-select">
          <span>I would:</span>
          {recommended === null
            ?<span className="recommend"> __</span>
            :<span className="recommend">{recommended ? "✓" : "✗"} </span>
          }
          <Button
            color={JSON.stringify(recommended)}
            text={"Yes"}
            setStatus={setRecommended}
          />
          <Button
            color={JSON.stringify(recommended)}
            text={"No"}
            setStatus={setRecommended}
          />
        </span>
        <h3>*Please rate the {props.details.name} on the following*: </h3>
        <Characteristics page={setPage} chars={props.product.characteristics} setChars={setCharacteristics} />
        {/* implement a return to page 3 button */}
        {!characteristics ? null :<button onClick={e=>setPage(3)}>Back to Summary</button>}
      </div>),
=======
    1: (<div className="tab">
      <div className="star-rating">
        <h3>*How would your rate the {props.details.name}?*</h3>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              id="star-button"
              type="button"
              key={index}
              className={index <= rating ? 'on' : 'off'}
              onClick={() => setRating(index)}>
              <span className="star">&#9733;</span>
            </button>
          );
        })}
        <span>{rating === 0 ? null : rating + ' STAR RATING -'}  {[null, 'Poor', 'Fair', 'Average', 'Good', 'Great!'][rating]}</span>
      </div>
      <h3> *Would you recommend this product to others?*</h3>
      <span className="recommend-select">
        <span>I would:</span>
        {recommended === null?
            <span className="recommend"> </span>:
            <span className="recommend">{recommended ? '✓' : '✗'} </span>
        }
        <Button
          color={JSON.stringify(recommended)}
          text={'Yes'}
          setStatus={setRecommended}
        />
        <Button
          color={JSON.stringify(recommended)}
          text={'No'}
          setStatus={setRecommended}
        />
      </span>
      <h3>*Please rate the {props.details.name} on the following*: </h3>
      <Characteristics page={setPage} chars={props.product.characteristics} setChars={setCharacteristics} />
      {/* implement a return to page 3 button */}
    </div>),
>>>>>>> main

    2: (<div className="tab">
      <UserInfo details={props.details} setPhotos={setPhotos} setBody={setBody} setSum={setSummary} page={setPage} setName={setName} setEmail={setEmail} />
      {/* implement a return to submit form page */}
<<<<<<< HEAD
      {name=== '' ?null :<button onClick={e=>setPage(3)}>Back to Summary</button>}

      </div>),

    3:<div className="tab">
        <h3>Please take a moment to verify your review!</h3>
        <div className="Submit-Form">
          <div className="Submit-Form-page row-a" onClick={()=>setPage(1)}>
          {/* <div className="Submit-Form-page row-a" > */}
            <span className="form-col-1">Rating: </span>
            <span className="form-col-2">{rating} Stars</span>
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(1)}>
          {/* <div className="Submit-Form-page row-b"> */}
            <span className="form-col-1">I would recommend this product: </span>
            <span className="form-col-2">{recommended ? "True" : "False"}</span>
          </div>
          <div className="Submit-Form-page row-a" onClick={()=>setPage(1)}>
          {/* <div className="Submit-Form-page row-a" > */}
            <span className="form-col-1">Characteristics: </span>
            {!characteristics
              ? null
              :<span className="form-col-2">
=======
    </div>),

    3: <div className="tab">
      <h3>Please take a moment to verify your review!</h3>
      <div className="Submit-Form">
        {/* <div className="Submit-Form-page row-a" onClick={()=>setPage(1)}> */}
        <div className="Submit-Form-page row-a" >
          <span className="form-col-1">Rating: </span>
          <span className="form-col-2">{rating} Stars</span>
        </div>
        {/* <div className="Submit-Form-page row-b" onClick={()=>setPage(1)}> */}
        <div className="Submit-Form-page row-b">
          <span className="form-col-1">I would recommend this product: </span>
          <span className="form-col-2">{recommended ? 'True' : 'False'}</span>
        </div>
        {/* <div className="Submit-Form-page row-a" onClick={()=>setPage(1)}> */}
        <div className="Submit-Form-page row-a" >
          <span className="form-col-1">Characteristics: </span>
          {!characteristics ?
              null:
              <span className="form-col-2">
>>>>>>> main
                {Object.entries(props.product.characteristics).map(([char, {id}]) => {
                  return (
                    <span className="reviewsubmitchars" key={id}>
                      <span>{char}: {characteristics[id]}</span>
                      <br></br>
                    </span>);
                })}
              </span>
<<<<<<< HEAD
            }
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(2)}>
          {/* <div className="Submit-Form-page row-b" > */}
            <span className="form-col-1">Summary: </span>
            <span className="form-col-2">{summary.slice(0, 20)}</span>
          </div>
          <div className="Submit-Form-page row-a" onClick={()=>setPage(2)}>
          {/* <div className="Submit-Form-page row-a" > */}
            <span className="form-col-1">Review: </span>
            <span className="form-col-2">{body.slice(0, 20)}</span>
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(2)}>
          {/* <div className="Submit-Form-page row-b" > */}
            <span className="form-col-1">photos: </span>
            <span className="form-col-2"> {photos[0] === '' ? '0' :photos.length}</span>
          </div>
          <div className="Submit-Form-page row-a" onClick={()=>setPage(2)}>
          {/* <div className="Submit-Form-page row-a" > */}
              <span className="form-col-1">Nickname: </span>
              <span className="form-col-2">{name.slice(0,20)}</span>
          </div>
          <div className="Submit-Form-page row-b" onClick={()=>setPage(2)}>
          {/* <div className="Submit-Form-page row-b" > */}
            <span className="form-col-1">Email: </span>
            <span className="form-col-2">{email.slice(0.20)}</span>
          </div>
=======
          }
        </div>
        {/* <div className="Submit-Form-page row-b" onClick={()=>setPage(2)}> */}
        <div className="Submit-Form-page row-b" >
          <span className="form-col-1">Summary: </span>
          <span className="form-col-2">{summary.slice(0, 20)}</span>
        </div>
        {/* <div className="Submit-Form-page row-a" onClick={()=>setPage(2)}> */}
        <div className="Submit-Form-page row-a" >
          <span className="form-col-1">Review: </span>
          <span className="form-col-2">{body.slice(0, 20)}</span>
        </div>
        {/* <div className="Submit-Form-page row-b" onClick={()=>setPage(2)}> */}
        <div className="Submit-Form-page row-b" >
          <span className="form-col-1">photos: </span>
          <span className="form-col-2"> {photos.length}</span>
>>>>>>> main
        </div>
        {/* <div className="Submit-Form-page row-a" onClick={()=>setPage(2)}> */}
        <div className="Submit-Form-page row-a" >
          <span className="form-col-1">Nickname: </span>
          <span className="form-col-2">{name.slice(0, 20)}</span>
        </div>
        {/* <div className="Submit-Form-page row-b" onClick={()=>setPage(2)}> */}
        <div className="Submit-Form-page row-b" >
          <span className="form-col-1">Email: </span>
          <span className="form-col-2">{email.slice(0.20)}</span>
        </div>
      </div>
      <br></br>
      <div>
        <button className="submit-btn" onClick={(e)=> sendPostRequest(e)}>Post your review!</button>
      </div>
    </div>,
  };

  return (
    <div id="reviewForm">
      {!pageForm[page] ? 'loading' : pageForm[page]}
    </div>
  );
}


export default NewReviewForm;
