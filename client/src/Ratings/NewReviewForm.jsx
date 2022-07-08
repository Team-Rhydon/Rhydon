import React from "react";

class NewReviewForm extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <form>
          <label>
            <input type="text" value=""></input>
            <input></input>
            <input type="submit" value="Post Review"></input>
          </label>
        </form>
      </div>
    )
  }
}

export default NewReviewForm;