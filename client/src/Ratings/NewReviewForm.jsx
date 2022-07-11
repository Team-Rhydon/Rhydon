import React from "react";
import Body from "./NewReviewPages/Body.jsx";
import Characteristics from "./NewReviewPages/Characteristics.jsx";
import ReviewPhotos from "./NewReviewPages/ReviewPhotos.jsx";
import Summary from "./NewReviewPages/Summary.jsx";
import UserInfo from "./NewReviewPages/UserInfo.jsx";

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
    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setStarRating = this.setStarRating.bind(this);
    this.setRecommended = this.setRecommended.bind(this);
    this.setChars = this.setChars.bind(this);
  }

  setChars(value){
    this.setState({
      characteristics: value
    }, ()=>{
      console.log(this.state.characteristics)
    })

  }
  handleClick(value){
    if(this.state.page > 0 && this.state.page < 7) {
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
        </div>),
      2:(<div className="tab"> Do you recommend this product?
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
      3:(<div className="tab"> 5 Radio buttons for characteristics
          <Characteristics setChars={this.setChars} />
        </div>),
      4:(<div className="tab"> Review Summary
          <Summary />
        </div>),
      5:(<div className="tab"> Review body --mandatory--
         <Body  />
         </div>),
      6:( <div className="tab"> upload photos
          <ReviewPhotos  />
        </div>),
      7:(<div className="tab"> nickname --mandatory--
            <UserInfo  />
        </div> )
    };

    return (
        <div id="reviewForm">
          <label> Tell us about the **product name**!</label>
          {!page[this.state.page] ? "loading" : page[this.state.page]}
          <div style={{overflow: "auto"}}>
            <div style={{float: "right"}}>
              <button type="button" id="prevBtn" onClick={()=>this.handleClick(-1)} >Previous</button>
              <button type="button" id="nextBtn" onClick={()=>this.handleClick(1)}>Next</button>
            </div>
          </div>
        </div>
    )
  }
}

export default NewReviewForm;