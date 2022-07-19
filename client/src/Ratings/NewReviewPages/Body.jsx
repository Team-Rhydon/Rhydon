import React, {useState} from "react";

const Body = props => {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.setBody(value);
    props.page(prevPage => prevPage + 1);
  }

  return (
    <form className="New-Review-Body" onSubmit={handleSubmit} >
      <textarea
        name="textarea"
        rows="10"
        cols="100"
        placeholder="Why did you like the product or not?"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        maxLength="1000"
        required
     />
      <div className="container-btn">
        <input className="submit-btn" disabled={value.length < 50} type="submit"/>
      </div>
    </form>
  )
}

export default Body;