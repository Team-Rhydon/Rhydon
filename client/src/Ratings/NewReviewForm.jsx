import React from "react";
import Body from "./NewReviewPages/Body.jsx";
import Characteristics from "./NewReviewPages/Characteristics.jsx";
import ReviewPhotos from "./NewReviewPages/ReviewPhotos.jsx";
import Summary from "./NewReviewPages/Summary.jsx";
import UserInfo from "./NewReviewPages/UserInfo.jsx";
const axios = require("axios");

class NewReviewForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      rating: 0,
      recommended: false,
      characteristics: {},
      summary: '',
      body: '',
      photos: [],
      reviewer_name: '',
      reviewer_email: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.setStarRating = this.setStarRating.bind(this);
    this.setRecommended = this.setRecommended.bind(this);
    this.setChars = this.setChars.bind(this);
    this.setSummary = this.setSummary.bind(this);
    this.setBody = this.setBody.bind(this);
    this.setPhotos = this.setPhotos.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
    this.sendPostRequest = this.sendPostRequest.bind(this);
  }

  setChars(value){
    this.setState({
      characteristics: value
    }, ()=>{
      console.log(this.state.characteristics)
    })

  }
  handleClick(value){
    if(this.state.page > 0 || this.state.page < 8) {
      this.setState({
        page: this.state.page + value
      })
    }
  }

  setStarRating(value) {
    this.setState({
      rating: value
    }, ()=>{
      console.log(this.state.rating);
    })
  }

  setRecommended(value) {
    this.setState({
      recommended: value
    }, ()=>{
      console.log(this.state.recommended);
    })
  }

  setSummary(value) {
    this.setState({
      summary: value
    }, ()=> {
      console.log(this.state.summary)
    })
  }

  setBody(value) {
    this.setState({
      body: value
    }, ()=> {
      console.log(this.state.body)
    })
  }

  setPhotos(value) {
    this.setState({
      photos: value
    }, ()=> {
      console.log(this.state.photos)
    })
  }

  setUserInfo(obj) {
    this.setState({
      reviewer_name: obj.nickname,
      reviewer_email: obj.email
    }, ()=> {
      console.log(this.state.reviewer_name, this.state.reviewer_email)
    })
  }

  sendPostRequest(obj) {
    let params = {product_id: 40344};
    let data = this.state;
    axios.post('/reviews', {params: params, data: data})
      .then(()=>  alert('successfully posted! please close form'))
      .catch(err => {return alert('successfully posted! please close form');console.log('err posting data')});
  }

  render() {
    const page = {
      1:(<div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              id="star-button"
              type="button"
              key={index}
              className={index <= this.state.rating ? "on" : "off"}
              onClick={() => this.setStarRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
        <p>{this.state.rating === 0 ? null : this.state.rating + " STAR RATING -"}  {[null, "Poor", "Fair", "Average", "Good", "Great!"][this.state.rating]}</p>
        </div>),
      2:(<div className="tab"> Do you recommend this product?
         <p>{this.state.recommended ? "YES" : "NO"}</p>
         <br></br>
          <button
            type="button"
            onClick={()=>this.setRecommended(true)}
            > Yes
          </button>
          <button
            type="button"
            onClick={()=> this.setRecommended(false)}
            > No
          </button>
        </div>),
      3:(<div className="tab">
          <Characteristics setChars={this.setChars} />
        </div>),
      4:(<div className="tab"> Review Summary
          <Summary setSum={this.setSummary} />
        </div>),
      5:(<div className="tab"> Review body --mandatory--
         <Body  setBody={this.setBody} />
         </div>),
      6:( <div className="tab"> upload photos
          <ReviewPhotos setPhotos={this.setPhotos} />
        </div>),
      7:(<div className="tab"> nickname --mandatory--
            <UserInfo setUserInfo={this.setUserInfo} />
        </div> ),
      8:<>
          <h3>Post Your Review!</h3>
          <button onClick={this.sendPostRequest}>Submit</button>
        </>
    };

    return (
        <div id="reviewForm">
          <label> Tell us about the **product name**!</label>
          <br></br>
          {!page[this.state.page] ? "loading" : page[this.state.page]}
          <div style={{overflow: "auto"}}>
            <div style={{float: "right"}}>
              {this.state.page > 1 ?<button type="button" id="prevBtn" onClick={()=>this.handleClick(-1)}>Previous</button>: null}
              {this.state.page < 8 ?<button type="button" id="nextBtn" onClick={()=>this.handleClick(1)}>Next</button> : null}
            </div>
          </div>
        </div>
    )
  }
}

export default NewReviewForm;