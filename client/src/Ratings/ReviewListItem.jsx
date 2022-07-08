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
      body: 'Lorem Ipsum',
      images: []
    }
  }
  render () {
    var shortBody = this.state.body.length < 250;
    return (
      <div className="ReviewTile" style={{border: "1px solid black", width: "75%"}} >
        <div style={{border: "1px solid black", width: "33%"}}>
          <span>Stars for this rating ** </span><br></br>
          <span>Review Date: DD/MM/YYYY : hh:mm  ** </span><br></br>
          <span>Name of Reviewer **</span>
        </div>
        <div>
          {shortBody
          ? <span>{this.state.body} **</span>
          :<>
            <span>{this.state.body.slice(0, 249) + '...'}</span>
            <button>Read More</button>
          </>}
          <span>Conditionally Rendered recommendation***</span>
          <span>Responses to review***</span>
          <span>Was this helpful?</span>
        </div>
          <br></br>

      </div>
    )
  }
}
export default ReviewListItem;