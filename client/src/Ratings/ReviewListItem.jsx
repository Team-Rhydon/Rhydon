import React from "react";

/*
//this component will need to display
  //a star rating (from single reviewer)
  //review date
  //review summary (1st 60 chars) <---style (BOLD)
  //review body
    //50-1000 characters of text
      //first 250 chars will always show
      //remaining chars will only show upon clicking a link thats says "Show More"
        //show more link will expand the tile to fit the rest of the characters in the review body
    //up to 5 submitted images (displayed as thumbnails)
      //upon clicking the images, toggle a modal view. should have a toggle to exit modal
  //recommendation text/checkmark
  //reviewer name
    // if reviewer name matches a sale information in the system, a verified purchaser stamp should appear
  //response to review
    // needs to be visually distinct from the main review body component
  //rating helpfulness
*/
class ReviewListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      shortBody: this.props.review.body.length < 249
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      shortBody: !this.state.shortBody
    })
  }
  render () {
    return (
      <div className="ReviewTile" style={{border: "1px solid black", width: "100%"}} >
        <div className="ReviewHeader" style={{border: "1px solid black", width: "100%"}}>
          <span>{'★'.repeat(this.props.review.rating)} </span>
          <span className="nameAndDate">
            <span>{this.props.review.reviewer_name} @</span>
            <span style={{padding: "5px"}}>{this.props.review.date.slice(0, -14)}</span>
          </span>
        </div>
        <div>
          <p style={{fontWeight: "bolder"}}>{this.props.review.summary.slice(0, 60)}</p>
          {this.state.shortBody
          ? <span>{this.props.review.body}</span>
          :<>
            <span>{this.props.review.body.slice(0, 249) + '...'}
            <button onClick={this.handleClick}>Read More</button>
            </span>
          </>}
          {!this.props.review.recommend
          ? null
          :<p>✓ I recommend this product</p>}
          {!this.props.review.response
          ? null
          : <span className="Review-Response">THIS IS WHERE RESPONSES WOULD GO IF I FOUND ANY</span>}
          <div>
            <span>Was this helpful? ({this.props.review.helpfulness}) ||</span>
            <span className="Report">  Report </span>
          </div>
        </div>
        <br></br>
      </div>
    )
  }
}
export default ReviewListItem;